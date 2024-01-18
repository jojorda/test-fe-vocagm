import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer,
    },
});
