import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "../../api/posts";
import type { IPost } from "../../models/IPost";

//createAsyncThunk<Returned, ThunkArg, ThunkApiConfig>()
export const fetchPosts = createAsyncThunk<
  IPost[], 
  void, 
  { rejectValue: string }
>(
  'posts/fetchPosts', //ID thunk for dev tools
  async (_, {rejectWithValue}) => { // Using thunkAPI
    try {
      const res = await getPosts(); 
      return res.data;
    }
    catch (e) {
      console.log(`err fetchPosts: ${(e as Error).message}`);
      return rejectWithValue( ( e as Error ).message );
    }
  }
);