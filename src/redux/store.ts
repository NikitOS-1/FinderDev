import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './slices/themeSlice.ts';
import loadingSlice from './slices/loadingSlice.ts';
import userSlice from './slices/userSlice.ts';
import errorSlice from './slices/errorSlice.ts';

const reducer = {
  theme: themeSlice,
  user: userSlice,
  loading: loadingSlice,
  error: errorSlice,
};

const store = configureStore({
  reducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;