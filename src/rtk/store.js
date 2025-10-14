import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/redux/reducers/authSlice";
const store = configureStore({
  reducer: { auth: authReducer },
  middleware: null,
});

export default store;
