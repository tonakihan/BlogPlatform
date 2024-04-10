import type { MouseEventHandler, FC, PropsWithChildren } from "react";
import cl from "./MyButton.module.css"

interface MyButtonProps extends PropsWithChildren {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const MyButton: FC<MyButtonProps> = ({ children, className, onClick }) => {
  let style = [cl.myButton];
  className && style.push(className);

  return (
    <button className={style.join(' ')} onClick={onClick}>{children}</button>
  );
}

export default MyButton;