import { type FC } from "react";
import PostItem from "./PostItem";
import cl from "../styles/post.module.css"
import type { IPost } from "../models/IPost";
import { useNavigate } from "react-router-dom";

interface PostListProps {
  posts: IPost[];
}

const PostList: FC<PostListProps> = ({ posts }) => {
  const navigate = useNavigate();
  const selectPost = (post: IPost) => {
    navigate(`/post/${post.id}`);
  }

  return (
    <div>
      {posts.map(post => (
        <div onClick={() => selectPost(post)} key={post.id}>
          <PostItem post={post} className={cl.postListElement} type='list'/>
        </div>
      ))}
    </div>
  );
}

export default PostList;