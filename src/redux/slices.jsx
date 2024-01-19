import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name:'auth',
    initialState: {
        user: '',
        isLoggedIn: false,
    },
    reducers: {
        login(state, action){
            state.user = action.payload
            state.isLoggedIn = true
        },
        logout(state){
            state.user = ''
            state.isLoggedIn = false
        }
    },
})

export const {login, logout} = AuthSlice.actions
export const AuthReducer = AuthSlice.reducer

console.log(AuthSlice);
