import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.userInfo = action.payload;
    },
    loggedOut: (state) => {
      state.userInfo = null;
    },
  },
});

const { signIn, loggedOut } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export function useStore() {
  const userStore = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return {
    signIn,
    loggedOut,
    dispatch,
    userStore,
  };
}

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
