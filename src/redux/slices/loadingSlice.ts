import { createSlice } from '@reduxjs/toolkit';

interface LoadingState {
    isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    clearLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setLoading, clearLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
