import { createSlice } from "@reduxjs/toolkit";
import STATUS from '../../constants';
import { getUsersThunk } from './userOperations'
import { userInitialState } from "./usersInitState";

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
        state.users = payload;
      })
      .addCase(getUsersThunk.pending, handlePending)
      .addCase(getUsersThunk.rejected, handleRejected);
  }
})

export const usersReducer = usersSlice.reducer
export const selectorUsersStatus = state => state.users.status;
export const selectorGetUsers = state => state.users.users;