import { HeaderStyled } from './styled';
import { ThemeSwitcher } from '../../components/ThemeSwitcher';
import { useAppSelector } from '../../redux/helpers';

function Header() {
  const theme = useAppSelector((store) => store.theme.mainTheme);

  return (
    <HeaderStyled theme={theme}>
      <p>FinderDev</p>
      <ThemeSwitcher />
    </HeaderStyled>
  );
}

export default Header;
