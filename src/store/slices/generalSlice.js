import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const generalSlice = createSlice({
  name: "generalSlice",
  initialState,
  reducers: {},
});

export default generalSlice.reducer;
