import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";

const store = configureStore({
    reducer: {
        users: UserSlice,
    },
})

export default store