import { URL_API_DOMAIN } from "../config";
import type { IPost } from "../models/IPost";
import axios from "axios";

export async function getPosts() {
  const res = await axios.get<IPost[]>(`${URL_API_DOMAIN}/api/post`);
  return res;
} 