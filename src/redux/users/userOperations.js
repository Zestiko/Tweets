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