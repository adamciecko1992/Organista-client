import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./AuthSlice/AuthSlice";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});


const rootReducer = combineReducers({
    counter: counterSlice.reducer,
    auth: authSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

export const { incremented, decremented } = counterSlice.actions;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch