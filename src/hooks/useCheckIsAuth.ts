import { authentication } from "../store/thunk/authThunk";
import { useAppDispatch } from "./redux/useAppDispatch";
import { useAppSelector } from "./redux/useAppSelector";

export const useCheckIsAuth = () => {
  const { isAuth } = useAppSelector( state => state.auth );
  const dispatch = useAppDispatch();

  //  Если был авторизован, подтягиваем из кэша
  if (localStorage.getItem('isAuth') && isAuth === false) {
    
    const login = localStorage.getItem('login') as string;
    const password = localStorage.getItem('password') as string;

    dispatch(authentication({ login, password }));
  };
}