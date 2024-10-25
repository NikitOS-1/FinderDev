import { HeaderStyled } from './styled.ts';
import { ThemeSwitcher } from '../../components/ThemeSwitcher';
import { useAppSelector } from '../../redux/helpers.ts';

function Header() {
  const theme = useAppSelector((store) => store.theme.mainTheme);

  return (
    <HeaderStyled theme={theme}>
      <p>Finder Dev</p>
      <ThemeSwitcher />
    </HeaderStyled>
  );
}

export default Header;
