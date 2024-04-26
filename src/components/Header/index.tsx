import type { FC } from "react";
import NavBar from "./NavBar";
import cl from "../../styles/header.module.css"
import type { IHtmlElement } from "../../types/IHtmlElement";
import AuthInfo from "./AuthInfo";

const Header: FC<IHtmlElement> = ({ className }) => {
  let style = [cl.header];
  className && style.push(className);

  return (
    <header className={style.join(' ')}>
      <div id="topBar" className={cl.barTop}>
        <NavBar className={cl.navBarTop}/>
        <AuthInfo className={cl.auth}/>
      </div>
    </header>
  );
}

export default Header;