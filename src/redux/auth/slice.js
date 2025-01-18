import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, registerThunk } from './operationsThunk';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedin: false,
};

const registerFulfilled = (state, action) => {
  state.user = action.payload;
  state.token = action.payload.token;
};

const loginFulfilled = (state, action) => {
  state.user = action.payload;
  state.token = action.payload.token;
  state.isLoggedin = true;
};

const logoutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedin = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      //   .addCase(loginThunk.pending, handlePending)
      .addCase(registerThunk.fulfilled, registerFulfilled)
      .addCase(loginThunk.fulfilled, loginFulfilled)
      .addCase(logoutThunk.fulfilled, logoutFulfilled);
    //   .addCase(loginThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
