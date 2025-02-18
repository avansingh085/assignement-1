import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production" 
});
