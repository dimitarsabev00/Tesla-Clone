import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./slices/generalSlice.js";
export * from "./slices/generalSlice";

const store = configureStore({
  reducer: {
    generalSlice,
  },
});

export default store;
