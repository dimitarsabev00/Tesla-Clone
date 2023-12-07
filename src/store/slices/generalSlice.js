import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  shoppingCart: [],
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
    addProduct: (state, action) => {
      state.shoppingCart.push(action.payload);
    },
  },
});

export const { login, logout, addProduct } = generalSlice.actions;

export default generalSlice.reducer;
