import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import commentsAPI from "../services/commentsAPI";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    [commentsAPI.reducerPath]: commentsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commentsAPI.middleware),
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
