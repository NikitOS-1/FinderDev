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
  const isLoading = useAppSelector(store => store.loading.isLoading);
  const isError = useAppSelector(store => store.error.error);

  const [searchUserName, setSearchUserName] = useState<string>('');

  const debounceSearch = useCallback(
    debounce((searchTerm: string) => {
      dispatch(getUserProfile(searchTerm));
    }, DELAY_SEARCH_INTERVAL),
    [],
  );

  useEffect(() => {
    if (searchUserName) {
      debounceSearch(searchUserName);
    }
  }, [searchUserName, debounceSearch]);

  return (
    <BodyStyled theme={theme}>
      <ContentWrapper>
        <InputSearch value={searchUserName} onChange={setSearchUserName} />
        {isLoading ? (
          <LoadingSpinner />
        ) : isError ? (
          <ErrorsHandler message="User not found" />
        ) : (
          <UserContent />
        )}
      </ContentWrapper>
    </BodyStyled>
  );
}

export default Body;
