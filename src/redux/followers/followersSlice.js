import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
  key: 'followers',
  storage,
};

const followersInitialState = {
  followers: [],
};

const followerSlice = createSlice({
  name: 'followers',
  initialState: followersInitialState,
  reducers: {
    setFollowers: {
      reducer(state, { payload }) {
        state.followers.push(payload);
      },
    },
    unsetFollowers: {
      reducer(state, { payload }) {
        const index = state.followers.indexOf(payload);
        if (index !== -1) {
          state.followers.splice(index, 1);
        }
      },
    },
  },
});

export const { setFollowers, unsetFollowers } = followerSlice.actions;
export const followersReducer = followerSlice.reducer;
export const persitiFollowersReduser = persistReducer(persistConfig, followersReducer);
export const setFollowersValue = state => state.followers.followers;
