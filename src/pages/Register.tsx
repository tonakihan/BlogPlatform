import { type FC, type SyntheticEvent } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import cl from "../styles/register.module.css";
import type { IUser } from "../models/IUser";
import useHandlerInput from "../hooks/useHandleInput";
import { useCreateUserMutation } from "../services/usersAPI";
import { useNavigate } from "react-router-dom";
import type { useAppSelector } from "../hooks/redux/useAppSelector";
import { useAppDispatch } from "../hooks/redux/useAppDispatch";
import { authentication } from "../store/thunk/authThunk";

const Register: FC = () => {
  interface IFormData extends IUser {
    checkPassword: string;
  }

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [createUser] = useCreateUserMutation();
  const [ formData, handlerInput ] = useHandlerInput<IFormData>({
    nickname: '',
    firstName: '',
    lastName: '',
    email: '',
    role: 'user',
    password: '',
    checkPassword: ''
  });

  const handleSubmit = async ( e: SyntheticEvent<HTMLFormElement> ) => {
    e.preventDefault();

    // Проверка пароля.
    if ( formData.checkPassword !== formData.password ) {
      alert("Пароли не одинаковые, проверьте и попробуйте снова");
      return;
    }

    //Отправка на сервер
    try {
      await createUser(formData);
      dispatch(authentication({ 
        login: formData.nickname, 
        password: formData.password
      }));
      navigate('/posts');
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className={cl.registerMain}>
      <h2>Регистрация</h2>

      <div className={cl.warning}>
        <h1>WARNING</h1>
        <p>В этом проекте сомнительная безопастность, так что <b>не рекомендуется указывать настоящие данные!</b></p>
      </div>

      <form onSubmit={handleSubmit}>
        <label> nickname
          <MyInput 
            name="nickname" 
            value={formData.nickname} 
            onChange={handlerInput}
            required={true}
          /> 
        </label>
        <label> Имя
          <MyInput 
            name="firstName" 
            value={formData.firstName} 
            onChange={handlerInput}
            required={true}
          /> 
        </label>
        <label> Фамилия
          <MyInput 
            name="lastName" 
            value={formData.lastName} 
            onChange={handlerInput}
            required={true}
          /> 
        </label>
        <label> Электронная почта
          <MyInput 
            name="email" 
            type="email"
            value={formData.email} 
            onChange={handlerInput}
            required={true}
          /> 
        </label>
        <label> Пароль
          <MyInput 
            name="password" 
            type="password"
            value={formData.password} 
            onChange={handlerInput}
            required={true}
          /> 
        </label>
        <label> Подтвердите пароль
          <MyInput 
            name="checkPassword" 
            type="password"
            value={formData.checkPassword} 
            onChange={handlerInput}
            required={true}
          /> 
        </label>
        <MyButton type="submit">Завершить регистрацию</MyButton>
      </form>
    </div>
  );
}

export default Register;