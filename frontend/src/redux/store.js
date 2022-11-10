import { configureStore } from '@reduxjs/toolkit'
import feedReducer from './feedSlice';
import openModal2 from './modal2';
import userSlice from './userSlice';

export default configureStore({
  reducer: {
    openModal: feedReducer,
    openModal2,
    userReducer:userSlice
  }
})