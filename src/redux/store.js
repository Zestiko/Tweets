import { configureStore } from "@reduxjs/toolkit";
import { userInitialState } from "./users/usersInitState";
import { usersReducer } from "./users/usersSlice";

const initState = {
  users: userInitialState,
  // followers: [],
}

export const store = configureStore({
  preloadedState: initState,
  reducer: {
    users:usersReducer,
  }
});

