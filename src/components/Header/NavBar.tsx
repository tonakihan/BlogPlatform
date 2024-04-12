import type { FC } from "react";
import { Link } from "react-router-dom";
import type { IHtmlElement } from "../../types/IHtmlElement";

const NavBar: FC<IHtmlElement> = ({ className }) => {
  return (
    <div className={className}>
      <Link to="/posts"> Posts </Link>
    </div>
  );
}

export default NavBar;