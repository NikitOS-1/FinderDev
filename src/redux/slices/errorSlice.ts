import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ErrorI {
  error: string | null;
}

const initialState: ErrorI = {
  error: null,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;
export default errorSlice.reducer;