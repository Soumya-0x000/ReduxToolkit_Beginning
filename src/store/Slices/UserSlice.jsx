import {createSlice} from '@reduxjs/toolkit'
import { clearAllUsersImport } from '../actions'

const UserSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        deleteSingleUser(state, action) {
            state.splice(action.payload, 1)
        },
    },
    extraReducers(builder){
        builder.addCase(clearAllUsersImport, () => {
            return []
        })
    }
})  

export default UserSlice.reducer
export const { addUser, deleteSingleUser } = UserSlice.actions