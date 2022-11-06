import { configureStore } from '@reduxjs/toolkit'
import feedReducer from './feedSlice';
import notificationReducer from './notificationSlice';

export default configureStore({
  reducer: {
    openModal: feedReducer,
    openNotification:notificationReducer
  }
})