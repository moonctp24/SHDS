import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  isLoading: false,
};

const spinnerSlice = createSlice({
  name: "spinner",
  initialState: initialUserState,
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    complete: (state) => {
      state.isLoading = false;
    },
  },
});

export const spinnerAction = spinnerSlice.actions;

export default spinnerSlice;
