import { configureStore } from "@reduxjs/toolkit";
import commentsAPI from "../services/commentsAPI";
import usersAPI from "../services/usersAPI";
import authSlice from "./slices/authSlice";
import postsAPI from "../services/postsAPI";

export const store = configureStore({
  reducer: {
    [commentsAPI.reducerPath]: commentsAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    [postsAPI.reducerPath]: postsAPI.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commentsAPI.middleware, usersAPI.middleware, postsAPI.middleware),
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
