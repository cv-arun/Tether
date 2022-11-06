import { createSlice } from '@reduxjs/toolkit'

export const notificationSlice = createSlice({
    name: 'Notification',
    initialState: {
        openModal: false
    },
    reducers: {
        openReducer: (state,action) => {
            state.openModal = action.payload
        }

    }

})


export const { openReducer} = notificationSlice.actions

export default notificationSlice.reducer