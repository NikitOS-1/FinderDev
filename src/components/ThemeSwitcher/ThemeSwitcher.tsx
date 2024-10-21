import { useState } from 'react';

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const themeText = isDark ? 'dark' : 'light';
};