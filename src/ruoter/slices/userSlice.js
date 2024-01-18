import { removeCookies, setCookies } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    credentials: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        onRegister: (state, action) => {
            state.user = action.payload;
            setCookies("user", action.payload, 1);
            removeCookies("loginSession");
        },
        onLogin: (state, action) => {
            state.credentials = action.payload;
            setCookies("loginSession", action.payload);
        },
        onLogout: (state) => {
            state.credentials = null;
            removeCookies("loginSession");
        },
    },
});

export const { setUser, onRegister, onLogin, onLogout } = userSlice.actions;
export default userSlice.reducer;
