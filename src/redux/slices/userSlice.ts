import { IUserDataResponse, IUserProfile } from '../../commons/types/interfaces.ts';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { clearLoading, setLoading } from './loadingSlice.ts';
import { clearError, setError } from './errorSlice.ts'; // Импортируем действия для ошибок
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

export const getUserProfile = createAsyncThunk<
  IUserDataResponse,
  string,
  { rejectValue: string }
>(
  'user/profile',
  async (userName, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading());
      thunkAPI.dispatch(clearError());
      return await userService.getUserProfile(userName);
    } catch (error: any) {
      const { message } = error;
      thunkAPI.dispatch(setError(message));
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
        state.id = action.payload.id;
        state.avatar = action.payload.avatar_url;
        state.name = action.payload.name;
        state.created = action.payload.created_at;
        state.login = action.payload.login;
        state.bio = action.payload.bio;
        state.public = action.payload.public_repos;
        state.followers = action.payload.followers;
        state.following = action.payload.following;
        state.location = action.payload.location;
        state.twitter = action.payload.twitter_username;
        state.blog = action.payload.blog;
        state.company = action.payload.company;
      });
  },
});

export default userSlice.reducer;