import { BodyStyled, ContentWrapper } from './styled.ts';
import { useAppDispatch, useAppSelector } from '../../redux/helpers.ts';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/Spinner/LoadingSpinner.tsx';
import { getUserProfile } from '../../redux/slices/userSlice.ts';
import { debounce } from '../../utilits/debounce.ts';

function Body() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((store) => store.theme.mainTheme);
  const isLoading = useAppSelector(store => store.loading.isLoading);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    dispatch(debounce(getUserProfile(searchText), 500));
  }, [searchText]);

  return (
    <BodyStyled theme={theme}>
      <ContentWrapper>
        <div>
          <input value={searchText} onChange={(e) => setSearchText(e.target.value)} />
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
