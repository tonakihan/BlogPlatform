import type { FC } from "react";
import MyInput from "../components/UI/input/MyInput";
import cl from "../styles/search.module.css";

const Search: FC = () => {
  return (
    <div>
      <fieldset className={cl.setTarget}>
        <legend>Что ищем?</legend>
        <div>
          <input type="radio" name="typeSearch" value="Post" checked/>
          <label>Post</label>
          <input type="radio" name="typeSearch" value="User"/>
          <label>User</label>
        </div>
      </fieldset>
      <MyInput placeholder="Search..." className={cl.input}/>
    </div>
  );
}

export default Search;