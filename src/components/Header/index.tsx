import type { FC } from "react";
import NavBar from "./NavBar";
import cl from "../../styles/header.module.css"
import type { IHtmlElement } from "../../types/IHtmlElement";

const Header: FC<IHtmlElement> = ({ className }) => {
  let style = [cl.header];
  className && style.push(className);

  return (
    <header className={style.join(' ')}>
      <div id="topBar" className={cl.barTop}>
        <NavBar className={cl.navBarTop}/>
        <div className={cl.auth}>
          {/*TODO: авторизация*/}
          <p>Auth</p>
        </div>
      </div>
    </header>
  );
}

export default Header;