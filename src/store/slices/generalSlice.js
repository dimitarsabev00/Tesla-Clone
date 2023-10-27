import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const generalSlice = createSlice({
  name: "generalSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = generalSlice.actions;

export default generalSlice.reducer;
