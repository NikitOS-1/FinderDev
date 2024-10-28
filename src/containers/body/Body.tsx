import { BodyStyled, ContentWrapper } from './styled.ts';
import { useAppSelector } from '../../redux/helpers.ts';

function Body() {
  const theme = useAppSelector((store) => store.theme.mainTheme);

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
