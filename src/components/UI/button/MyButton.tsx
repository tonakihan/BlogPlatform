import type { MouseEventHandler, FC, PropsWithChildren } from "react";
import cl from "./MyButton.module.css"

interface MyButtonProps extends PropsWithChildren {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: string;
}

const MyButton: FC<MyButtonProps> = ({ children, className, onClick, type }) => {
  let style = [cl.myButton];
  className && style.push(className);

  return (
    <button className={style.join(' ')} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default MyButton;