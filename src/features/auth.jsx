import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: null,
  isLoading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    signupSuccess(state, action) {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    logoutSuccess(state) {
      state.user = null;
    }
  }
});

export const { 
  loginStart, 
  loginSuccess, 
  loginFailure,
  signupSuccess,
  logoutSuccess 
} = authSlice.actions;

export default authSlice.reducer;