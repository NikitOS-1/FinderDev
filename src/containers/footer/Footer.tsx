import { FooterStyled } from './footer.styled.ts';
import { useAppSelector } from '../../redux/helpers.ts';

function Footer() {
  const theme = useAppSelector((store) => store.theme.mainTheme);

  return (
    <FooterStyled theme={theme}>
      <p>Nikita Puzyrenko. 2024</p>
    </FooterStyled>
  );
}

export default Footer;