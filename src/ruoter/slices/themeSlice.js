import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "blue",
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "blue" ? "orange" : "blue";
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
