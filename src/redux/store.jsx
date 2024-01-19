import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./slices";

export const store = configureStore({
    reducer: {
        authUser: AuthReducer,
    },
})