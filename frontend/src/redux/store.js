import { configureStore } from '@reduxjs/toolkit'
import feedReducer from './feedSlice';
import openModal2 from './modal2';

export default configureStore({
  reducer: {
    openModal: feedReducer,
    openModal2
  }
})