import {createSlice} from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) {},
        deleteSingleUser(state, action) {},
        deleteAllUsers(state, action) {},
    }
})  

console.log(UserSlice.actions);

export default UserSlice.reducer
