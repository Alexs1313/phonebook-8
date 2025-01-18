import { configureStore } from '@reduxjs/toolkit';

const { authReducer } = require('./auth/slice');

export const store = configureStore({
  reducer: { auth: authReducer },
});
