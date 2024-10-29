import { BodyStyled, ContentWrapper } from './styled.ts';
import { useAppDispatch, useAppSelector } from '../../redux/helpers.ts';
import { useCallback, useEffect, useState } from 'react';
import LoadingSpinner from '../../components/Spinner/LoadingSpinner.tsx';
import { debounce } from '../../utilits/debounce.ts';
import { getUserProfile } from '../../redux/slices/userSlice.ts';

const DELAY_SEARCH_INTERVAL = 2000;

function Body() {
  const dispatch = useAppDispatch();

  const theme = useAppSelector((store) => store.theme.mainTheme);
  const isLoading = useAppSelector(store => store.loading.isLoading);

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
        <div>
          <input value={searchUserName} onChange={
            (e) => setSearchUserName(e.target.value)
          } />
          <div>
            search
          </div>
        </div>
        {isLoading ? <LoadingSpinner /> : <div>content</div>}
      </ContentWrapper>
    </BodyStyled>
  );
}

export default Body;
