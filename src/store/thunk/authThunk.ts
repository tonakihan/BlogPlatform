import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IUser } from "../../models/IUser";
import type { IAuth } from "../../types/IAuth";
import { getUsers } from "../../api/users";

//createAsyncThunk<Returned, ThunkArg, ThunkApiConfig>()
export const authentication = createAsyncThunk<
  IUser, 
  IAuth, 
  { rejectValue: string }
>(
  'auth/authentication',
  async ( { login, password }, thunkApi ) => {
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);

    try {
      /*
      // Для отладки
      const users = [{
        id: 1,
        firstName: "Lox",
        lastName: "Pedalnyi",
        nickname: "prostak228",
        email: "unknown@228may.ru",
        role: "user",
        password: "123",
      }, {
        id: 2,
        firstName: "HOL",
        lastName: "DOWMN",
        nickname: "alarma",
        email: "alyarma@228may.ru",
        role: "user",
        password: "123",
      }] as IUser[];*/
      const {data: users} = await getUsers(); 

      //Проверка и возврат результата
      const user = users.find(user => user.nickname === login && user.password === password);
      if (user) {
        return user;
      } else {
        return thunkApi.rejectWithValue("Неверные логин или пароль");
      }
    } catch (e) {
      console.log(e);
      return thunkApi.rejectWithValue("Ошибка запроса");
    }
  },
);
