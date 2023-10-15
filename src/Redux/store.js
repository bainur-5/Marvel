import { configureStore,  } from "@reduxjs/toolkit";
import arraySlice from "./idSlice/idSlice";
import { apiSlice } from "../api/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "redux";

const rootReducer = combineReducers({

})

export const store = configureStore({
    reducer: {
        arraySlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch)