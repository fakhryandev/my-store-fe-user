import User from '../../types/User/User';
import authApi from '../../utils/authApi';

import { AppThunk } from '../store';
import { loginFailure, loginRequest, loginSuccess } from './authSlice';

export const loginAsync =
  (credentials: { username: string; password: string }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loginRequest());

      const response = await authApi.login(credentials);

      const user: User = response.data;

      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFailure(error.message || 'Login failed.'));
    }
  };
