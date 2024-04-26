import { createSlice } from "@reduxjs/toolkit";
import type { IUser } from "../../models/IUser";
import { authentication } from "../thunk/authThunk";

interface authState {
  isAuth: boolean,
  userInfo: IUser | null,
  isLoading: boolean,
  error: string | null;
};

const initialState: authState = {
  isAuth: false,
  userInfo: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth", //authentication
  initialState,
  reducers: {
    logout(state) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authentication.pending, (state) => {
        localStorage.removeItem('isAuth');
        return {
          ...initialState,
          isLoading: true
        }
      })
      .addCase(authentication.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.userInfo = action.payload;
        state.error = null;
        localStorage.setItem('isAuth', 'true');
      })
      .addCase(authentication.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
  },
});

export const {
  logout
} = authSlice.actions;

export default authSlice.reducer;
