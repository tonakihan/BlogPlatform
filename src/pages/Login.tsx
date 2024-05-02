import type { FC, SyntheticEvent } from "react";
import { useEffect } from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import cl from "../styles/login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux/useAppDispatch";
import { authentication } from "../store/thunk/authThunk";
import { useAppSelector } from "../hooks/redux/useAppSelector";
import Loading from "../components/Loading";
import Error from "../components/Error";
import type { IAuth } from "../types/IAuth";
import useHandlerInput from "../hooks/useHandleInput";

const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuth, isLoading, error } = useAppSelector( state => state.auth );
  const [ formData, handleInputChange ] = useHandlerInput<IAuth>({
    login: '',
    password: ''
  });

  useEffect(() => {
    if (isAuth) navigate('/posts');
  }, [isAuth, navigate]);

  const handleSubmit = ( event: SyntheticEvent<HTMLFormElement> ) => {
    event.preventDefault();
    if (formData.login === '' || formData.password === '') {
      alert("Введите логин и пароль");
      return;
    }
    dispatch(authentication(formData));
  }

  if (isLoading) 
    return <Loading />

  if (error) {
    setTimeout(() => {
      //TODO: Исправить костыль на rerender component
      window.location.reload();
    }, 5000);
    return <Error message={error} />
  }

  return(
    <div className={cl.loginMain}>
      <form onSubmit={handleSubmit}>
          <MyInput 
            name="login"
            type="text" 
            placeholder="Логин" 
            value={formData.login} 
            onChange={handleInputChange}
          />
          <MyInput 
            name="password"
            type="password" 
            placeholder="Пароль" 
            value={formData.password} 
            onChange={handleInputChange}
          />
          <br/>
          <MyButton type="submit">login</MyButton>
      </form>
      <Link to="/register">Регистрация</Link>
    </div>
  );
}

export default Login;