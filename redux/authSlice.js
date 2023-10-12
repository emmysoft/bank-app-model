import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: null,
    logout: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.login = action.payload;
        },
        setLogout: (state) => {
            state.logout = null
        }
    }
})

export const { setLogin, setLogout } = authSlice.actions;

export const selectLogin = (state) => state.auth.login;
export const selectLogout = (state) => state.auth.logout;
export default authSlice.reducer;