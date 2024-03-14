import { createSlice } from "@reduxjs/toolkit";
import type { Post } from "../../types/postType";

type PostState = {
  postList: Post[];
};

const initialState: PostState =  {
  postList: []
};

const postSlice = createSlice ({
  // name used in action types
  name: "posts",
  initialState,
  reducers: {
  },
});

export default postSlice.reducer;