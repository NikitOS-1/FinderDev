import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './slices/themeSlice.ts';
import { userReducer } from './slices/userSlice.ts';

const reducer = {
  theme: themeSlice,
  user: userReducer,
};

const store = configureStore({
  reducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;