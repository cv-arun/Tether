import { configureStore } from '@reduxjs/toolkit'
import feedReducer from './feedSlice'

export default configureStore({
  reducer: {
    openModal: feedReducer
  }
})