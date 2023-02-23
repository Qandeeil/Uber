import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice/navSlice";

const store = configureStore({
    reducer: {
        navSlice
    }
})

export default store;