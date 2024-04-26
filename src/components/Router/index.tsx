import type { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PostById from "../../pages/PostById";
import Posts from "../../pages/Posts";
import Search from "../../pages/Search";
import About from "../../pages/About";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/post/:id" element={<PostById />} />
      <Route path="/search" element={<Search />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={
        <Navigate to="/posts" replace />
      }/>
    </Routes>
  )
}

export default Router;