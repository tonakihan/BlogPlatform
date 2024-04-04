import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IPost } from "../../models/IPost";
import { fetchPosts } from "../thunk/postThunk";

type PostState = {
  posts: IPost[],
  isLoading: boolean,
  error: string | null
};

const initialState: PostState =  {
  posts: [],
  isLoading: true,
  error: null,
};

const postSlice = createSlice ({
  name: "posts",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      /* Reducers for fetchPosts */
      // Типо слушатели функции fetchPosts
      .addCase(fetchPosts.pending, (state) => {
        //Start loading
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        //Success load data
        state.isLoading = false;
        state.posts = action.payload;
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        //Fail load data
        state.isLoading = false;
        state.error = action.payload as string;
      })

  },
});

export default postSlice.reducer;
//export const {
//} = postSlice.actions;
