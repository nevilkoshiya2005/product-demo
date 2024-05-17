import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice"
import homeReducer from "./counter/home/homeSlice"

export const store = configureStore({
    reducer: {
        counter : counterReducer,
        product : homeReducer 
    }
}) 