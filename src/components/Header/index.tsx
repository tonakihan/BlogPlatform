import type { FC } from "react";
import NavBar from "./NavBar";
import cl from "../../styles/header.module.css"
import type { IHtmlElement } from "../../types/IHtmlElement";

const Header: FC<IHtmlElement> = ({ className }) => {
  let style = [cl.header];
  className && style.push(className);

  return (
    <header className={style.join(' ')}>
      <NavBar className={cl.navBarTop}/>
      <div className={cl.auth}>
        {/*TODO: авторизация*/}
        <p>Auth</p>
      </div>
    </header>
  );
}

export default Header;