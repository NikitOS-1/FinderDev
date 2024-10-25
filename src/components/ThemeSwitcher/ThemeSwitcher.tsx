//@ts-ignore
import LightModeIcon from '../../assets/light_mode.svg?react';
//@ts-ignore
import DarkModeIcon from '../../assets/dark_mode.svg?react';
import { ThemeSwitcherStyled } from './styled.ts';
import { useAppDispatch, useAppSelector } from '../../redux/helpers.ts';
import { ThemeType, toggleTheme } from '../../redux/slices/themeSlice.ts';


export const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((store) => store.theme.mainTheme);
  const themeText = theme === ThemeType.light ? ThemeType.dark : ThemeType.light;
  const ThemeIcon = theme === ThemeType.light ? <DarkModeIcon /> : <LightModeIcon />;

  return (
    <ThemeSwitcherStyled>
      <span>{themeText}</span>
      <div onClick={() => dispatch(toggleTheme())}>
        {ThemeIcon}
      </div>
    </ThemeSwitcherStyled>
  );
};