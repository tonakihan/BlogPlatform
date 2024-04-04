import type { IPost } from "../models/IPost";
import axios from "axios";

export async function getPosts() {
  const res = await axios.get<IPost[]>(`/api/post`); //TODO
  return res;
} 