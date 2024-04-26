import type { FC } from "react";
import type { IHtmlElement } from "../../types/IHtmlElement";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux/useAppSelector";
import MyButton from "../UI/button/MyButton";
import cl from "../../styles/header.module.css";
import { useAppDispatch } from "../../hooks/redux/useAppDispatch";
import { logout } from "../../store/slices/authSlice";

interface IAuthProps extends IHtmlElement {};

const Auth: FC<IAuthProps> = ({ className }) => {
  const { isAuth, userInfo } = useAppSelector( state => state.auth );
  const dispath = useAppDispatch();

  const handleClick = () => {
    dispath(logout());
  }

  return (
    <div className={className}>
      {isAuth 
      ? <div className={cl.authLoggined}>
          <div className={cl.authUserInfo}>{userInfo.nickname}</div> 
          <MyButton onClick={handleClick}>Logout</MyButton>
        </div>
      : <Link to="/login">Login</Link>
      }
    </div>
  );
};

export default Auth;