import type { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PostById from "../../pages/PostById";
import Posts from "../../pages/Posts";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/post/:id" element={<PostById />} />
      <Route path="/" element={
        <Navigate to="/posts" replace />
      }/>
    </Routes>
  )
}

export default Router;