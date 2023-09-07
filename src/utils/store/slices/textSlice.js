import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "text",
  initialState: {
    value: "standard",
  },
  reducers: {
    changeFont: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeFont } = textSlice.actions;

export default textSlice.reducer;
