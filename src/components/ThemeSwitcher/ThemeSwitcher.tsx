import { useState } from 'react';
//@ts-ignore
import LightModeIcon from '../../assets/light_mode.svg?react';
//@ts-ignore
import DarkModeIcon from '../../assets/dark_mode.svg?react';
import { themeTextEnum } from './types.ts';
import { ThemeSwitcherStyled } from './styled.ts';


export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const themeText = isDark ? themeTextEnum.dark : themeTextEnum.light;
  const ThemeIcon = isDark ? <DarkModeIcon /> : <LightModeIcon />;

  return (
    <ThemeSwitcherStyled>
      <span>{themeText}</span>
      <div onClick={() => setIsDark(!isDark)}>
        {ThemeIcon}
      </div>
    </ThemeSwitcherStyled>
  );
};