import { createSlice } from '@reduxjs/toolkit';

const getInitialToken = () => {
  const token = localStorage.getItem('token');
  return token && token !== 'undefined' && token !== 'null' ? token : null;
};

const getInitialUser = () => {
  const storedUser = localStorage.getItem('user');
  if (!storedUser || storedUser === 'undefined' || storedUser === 'null') {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch {
    return null;
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: getInitialToken(),
    user: getInitialUser(),
  },
  reducers: {
    loginUser: (state, action) => {
      const data = action.payload || {};

      if (data.token) {
        localStorage.setItem('token', data.token);
        state.token = data.token;
      }

      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
        state.user = data.user;
      }
    },
    logout: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = null;
      state.user = null;
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      localStorage.setItem('user', JSON.stringify(updatedUser));
      state.user = updatedUser;
    },
  },
});

export const { loginUser, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
