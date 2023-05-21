import { createAsyncThunk } from '@reduxjs/toolkit';
import { tweetsApi } from '../../http/http';

export const getUsersThunk = createAsyncThunk(
  'users/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await tweetsApi.get('/users');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Sorry, something went wrong');
    }
  }
);

export const updateFollowershUsersThunk = createAsyncThunk(
  'users/put',
  async ({ id, followers }, thunkAPI) => {
    try {
      const { data } = await tweetsApi.put(`/users/${id}`, {
        followers: followers,
      });

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('Sorry, something went wrong');
    }
  }
);
