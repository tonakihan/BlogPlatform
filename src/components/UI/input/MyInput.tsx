import type { FC } from "react";
import cl from "./MyInput.module.css";
import type { IHtmlElement } from "../../../types/IHtmlElement";

interface MyInputProps extends IHtmlElement {
  placeholder?: string;
}

const MyInput: FC<MyInputProps> = ({ className, placeholder }) => {
  let style = [cl.myInput];
  className && style.push(className);

  return (
    <input className={style.join(' ')} placeholder={placeholder} type="text"/>
  );
}

export default MyInput;