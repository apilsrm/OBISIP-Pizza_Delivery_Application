import {configureStore} from "@reduxjs/toolkit"
import authSlice from "../features/authSlice";
import adminSlice from "../features/adminSlice";
import pizzaSlice from "../features/pizzaSlice"

const store = configureStore({
  reducer: {
    pizza: pizzaSlice,
    auth:authSlice,
    admin:adminSlice,
  },
})

export default store;
