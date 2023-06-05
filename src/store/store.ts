import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./AuthSlice/AuthSlice";
import { translationsSlice } from "./TranslationsSlice/TranslationsSlice";
import { modalSlice } from "./ModalSlice/ModalSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  translations: translationsSlice.reducer,
  modal: modalSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
