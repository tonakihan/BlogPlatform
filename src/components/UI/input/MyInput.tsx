import type { ChangeEventHandler, FC } from "react";
import cl from "./MyInput.module.css";
import type { IHtmlElement } from "../../../types/IHtmlElement";

interface MyInputProps extends IHtmlElement {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const MyInput: FC<MyInputProps> = ({ 
  className, 
  placeholder, 
  type = 'text',
  name,
  value,
  onChange,
  id
}) => {
  let style = [cl.myInput];
  className && style.push(className);

  return (
    <input 
      className={style.join(' ')} 
      placeholder={placeholder} 
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
      />
  );
}

export default MyInput;