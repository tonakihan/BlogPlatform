import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import commentsAPI from "../services/commentsAPI";
import usersAPI from "../services/usersAPI";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    [commentsAPI.reducerPath]: commentsAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commentsAPI.middleware, usersAPI.middleware),
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
