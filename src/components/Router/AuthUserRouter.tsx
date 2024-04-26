import { Navigate, Route, Routes } from "react-router-dom";
import Posts from "../../pages/Posts";
import PostById from "../../pages/PostById";
import Search from "../../pages/Search";
import About from "../../pages/About";
import Error from "../Error";
const AuthUserRouter = () => {
  return(
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/post/:id" element={<PostById />} />
      <Route path="/search" element={<Search />} />
      <Route path="/about" element={<About />} />

      <Route path="/login" element={
        <Navigate to="/posts" replace />
      }/>
      <Route path="/register" element={
        <Navigate to="/posts" replace />
      }/>

      <Route path="/" element={
        <Navigate to="/posts" replace />
      }/>
      <Route path='*' element={<Error message="Несуществующая страница" />} />
    </Routes>
  );
}

export default AuthUserRouter;