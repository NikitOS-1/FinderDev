import { BodyStyled } from './styled.ts';
import { useAppSelector } from '../../redux/helpers.ts';

function Body() {
  const theme = useAppSelector((store) => store.theme.mainTheme);

  return (
    <BodyStyled theme={theme}>
      <p>Body</p>
    </BodyStyled>
  );
}

export default Body;
