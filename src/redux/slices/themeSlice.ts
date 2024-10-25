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
      state.mainTheme === ThemeType.light ?
        state.mainTheme = ThemeType.dark :
        state.mainTheme = ThemeType.light;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const { reducer } = themeSlice;

export default reducer;
