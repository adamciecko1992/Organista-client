import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./AuthSlice/AuthSlice";
import { translationsSlice } from "./TranslationsSlice/TranslationsSlice";




const rootReducer = combineReducers({
    auth: authSlice.reducer,
    translations: translationsSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch