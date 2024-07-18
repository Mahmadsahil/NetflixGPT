import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: "language",
    initialState: {
        gptAddedLanguage: 'en'
    },
    reducers: {
        addLanguage: (state, action) => {
            state.gptAddedLanguage = action.payload;
        },
    },
});

export const { addLanguage } = langSlice.actions;

export default langSlice.reducer;