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
    removeProduct: (state, action) => {
      const { id } = action.payload;
      state.shoppingCart = state.shoppingCart.filter((item) => item.id !== id);
    },
    buyAllProducts: (state) => {
      state.shoppingCart = [];
    },
  },
});

export const { login, logout, addProduct, removeProduct,buyAllProducts } =
  generalSlice.actions;

export default generalSlice.reducer;
