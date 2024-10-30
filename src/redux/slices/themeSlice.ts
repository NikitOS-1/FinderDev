import { createSlice } from '@reduxjs/toolkit';

export enum ThemeType {
  light = 'light',
  dark = 'dark'
}

const initialState = {
  mainTheme: ThemeType.light,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.mainTheme === ThemeType.light) {
        state.mainTheme = ThemeType.dark;
      } else {
        state.mainTheme = ThemeType.light;
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
