import { configureStore } from "@reduxjs/toolkit";
import spinnerSlice from "./spinner/spinner-slice";

const store = configureStore({
  reducer: {
    spinner: spinnerSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
