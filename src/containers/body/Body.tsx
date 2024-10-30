import { BodyStyled, ContentWrapper } from './styled.ts';
import { useAppDispatch, useAppSelector } from '../../redux/helpers.ts';
import { useCallback, useEffect, useState } from 'react';
import LoadingSpinner from '../../components/Spinner/LoadingSpinner.tsx';
import { debounce } from '../../utilits/debounce.ts';
import { getUserProfile } from '../../redux/slices/userSlice.ts';
import { InputSearch } from '../../components/InputSearch';
import { ErrorsHandler } from '../../components/ErrorsHandler';
import { UserContent } from '../UserContent';

const DELAY_SEARCH_INTERVAL = 1000;

function Body() {
  const dispatch = useAppDispatch();

  const theme = useAppSelector((store) => store.theme.mainTheme);
  const isLoading = useAppSelector((store) => store.loading.isLoading);
  const isError = useAppSelector((store) => store.error.error);
  const userProfile = useAppSelector((store) => store.user);

  const [searchUserName, setSearchUserName] = useState<string>('');
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const debounceSearch = useCallback(
    debounce((searchTerm: string) => {
      dispatch(getUserProfile(searchTerm));
      setHasSearched(true);
    }, DELAY_SEARCH_INTERVAL),
    [dispatch],
  );

  useEffect(() => {
    if (searchUserName) {
      debounceSearch(searchUserName);
    }
  }, [searchUserName, debounceSearch]);

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }

    if (isError) {
      return <ErrorsHandler message="User not found" />;
    }

    if (hasSearched && userProfile.id) {
      return <UserContent />;
    }

    return <div>Start searching for GitHub users!</div>;
  };

  return (
    <BodyStyled theme={theme}>
      <ContentWrapper>
        <InputSearch value={searchUserName} onChange={setSearchUserName} />
        {renderContent()}
      </ContentWrapper>
    </BodyStyled>
  );
}

export default Body;