import type { FC } from "react";
import AuthUserRouter from "./AuthUserRouter";
import { useAppSelector } from "../../hooks/redux/useAppSelector";
import NonAuthUserRouter from "./NonAuthUserRouter";


const Router: FC = () => {
  const { isAuth } = useAppSelector( state => state.auth );

  if (isAuth) 
    return ( <AuthUserRouter/> );
  else
    return ( <NonAuthUserRouter/>);
}

export default Router;