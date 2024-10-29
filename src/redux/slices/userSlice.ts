import { IUserProfile } from '../../commons/types/interfaces.ts';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { clearLoading, setLoading } from './loadingSlice.ts';
import userService from '../../services/user/userService.ts';


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

export const getUserProfile = createAsyncThunk<UserProfile, string, { rejectValue: string }>(
  'user/profile',
  async (userId, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading());
      return await userService.getUserProfile(userId);
    } catch (error: any) {
      const { message } = error;
      thunkAPI.dispatch(setMessage(convertToErrorMessage(error)));
      return thunkAPI.rejectWithValue(message);
    } finally {
      thunkAPI.dispatch(clearLoading());
    }
  },
);


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
