//@ts-ignore
import GitHubIcon from '../../assets/github_icon.svg?react';
import { BodyStyled, ContentWrapper } from './styled.ts';
import { useAppDispatch, useAppSelector } from '../../redux/helpers.ts';
import { useCallback, useEffect, useState } from 'react';
import LoadingSpinner from '../../components/Spinner/LoadingSpinner.tsx';
import { debounce } from '../../utilits/debounce.ts';
import { clearUserData, getUserProfile } from '../../redux/slices/userSlice.ts';
import { InputSearch } from '../../components/InputSearch';
import { ErrorsHandler } from '../../components/ErrorsHandler';
import { UserContent } from '../UserContent';
import { clearError } from '../../redux/slices/errorSlice.ts';

const DELAY_SEARCH_INTERVAL = 1000;
const MIN_SEARCH_LENGTH = 1;

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
      dispatch(clearError());

      if (searchTerm.length > MIN_SEARCH_LENGTH) {
        dispatch(getUserProfile(searchTerm));
        setHasSearched(true);
      }
    }, DELAY_SEARCH_INTERVAL),
    [dispatch],
  );

  useEffect(() => {
    if (userProfile.id) {
      dispatch(clearUserData());
    }

    if (searchUserName.length >= MIN_SEARCH_LENGTH) {
      debounceSearch(searchUserName);
    }
  }, [dispatch, searchUserName, debounceSearch]);

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

    return (
      <div className="github_icon">
        <GitHubIcon />
      </div>
    );
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