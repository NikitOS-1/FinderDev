import { IUserProfile } from '../../commons/types/interfaces.ts';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const initialState: IUserProfile = {
  id: 0,
  avatar: '',
  name: '',
  created: '',
  login: '',
  bio: '',
  public: 0,
  followers: 0,
  following: 0,
  location: '',
  twitter: '',
  blog: '',
  company: '',
};




const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (reducerBuilder) => {
    reducerBuilder
      .addCase(getUserProfile.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
      })
      .addCase(getUserProfile.rejected, () => {
      });
  },
});

// export const {} = userSlice.actions;
export const userReducer = userSlice.reducer;
