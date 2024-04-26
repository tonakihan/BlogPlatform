import axios from "axios";
import { URL_API_DOMAIN } from "../config";
import type { IUser } from "../models/IUser";

export async function getUsers() {
  const res = await axios.get<IUser[]>(`${URL_API_DOMAIN}/api/user`);
  return res;
} 