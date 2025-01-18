import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// const { login, register, logout } = require('services/auth-service');

axios.defaults.baseURL = 'https://connections-api.goit.global';

const setAuthHeaderToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeaderToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk('auth/register', async body => {
  try {
    const { data } = await axios.post('/users/signup', body);
    setAuthHeaderToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const loginThunk = createAsyncThunk('auth/login', async body => {
  try {
    const { data } = await axios.post('/users/login', body);
    setAuthHeaderToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    clearAuthHeaderToken();
  } catch (error) {
    console.log(error);
  }
});
