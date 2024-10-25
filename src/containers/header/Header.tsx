import { HeaderWrapper } from './header.styled.ts';
import { ThemeSwitcher } from '../../components/ThemeSwitcher';

function Header() {
  return (
    <HeaderWrapper>
      <p>Headers</p>
      <ThemeSwitcher/>
    </HeaderWrapper>
  );
}

export default Header;
