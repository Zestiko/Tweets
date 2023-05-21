import { createSlice } from '@reduxjs/toolkit';
import STATUS from '../../constants';
import { getUsersThunk, updateFollowershUsersThunk } from './userOperations';
import { userInitialState } from './usersInitState';

const handlePending = state => {
  state.status = STATUS.loading;
};
const handleRejected = (state, action) => {
  state.status = STATUS.error;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
      .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.users.push(...payload);
      })
      .addCase(updateFollowershUsersThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        const idx = state.users.findIndex(user => user.id === payload.id);
        state.users[idx] = payload;
      })
      .addCase(getUsersThunk.pending, handlePending)
      .addCase(getUsersThunk.rejected, handleRejected)
      .addCase(updateFollowershUsersThunk.pending, handlePending)
      .addCase(updateFollowershUsersThunk.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;
export const selectorUsersStatus = state => state.users.status;
export const selectorGetUsers = state => state.users.users;
