import { createSlice } from '@reduxjs/toolkit'

export const openModal2 = createSlice({
    name: 'Notification',
    initialState: {
        openModal:{
            open:false,
            component:<p>hello</p>
        }
    },
    reducers: {
        openReducer: (state,action) => {
            state.openModal = action.payload
        }

    }

})


export const { openReducer} = openModal2.actions

export default openModal2.reducer