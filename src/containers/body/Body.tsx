import { BodyStyled, ContentWrapper } from './styled.ts';
import { useAppDispatch, useAppSelector } from '../../redux/helpers.ts';
import { useEffect } from 'react';
import { getUserProfile } from '../../redux/slices/userSlice.ts';

function Body() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((store) => store.theme.mainTheme);

  useEffect(() => {
    // dispatch(getUserProfile('NikitOS-1'));
  }, []);

  return (
    <BodyStyled theme={theme}>
      <ContentWrapper>
        <div>search</div>
        <div>content</div>
      </ContentWrapper>
    </BodyStyled>
  );
}

export default Body;
