import { Styled } from './styled.ts';
import { useAppSelector } from '../../redux/helpers.ts';

function Footer() {
  const theme = useAppSelector((store) => store.theme.mainTheme);

  return (
    <Styled theme={theme}>
      <p>Nikita Puzyrenko. 2024</p>
    </Styled>
  );
}

export default Footer;