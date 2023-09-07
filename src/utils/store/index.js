import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme.slice";
import textReducer from "./slices/textSlice";
export default configureStore({
  reducer: {
    theme: themeReducer,
    text: textReducer,
  },
});
