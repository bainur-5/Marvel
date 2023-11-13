import { configureStore,  } from "@reduxjs/toolkit";
import { apiSlice } from "../api/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "redux";
import idSlice from "./idSlice/idSlice";

const rootReducer = combineReducers({
    idSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch)