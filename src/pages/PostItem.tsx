import type { FC } from "react";
import type { IPost } from "../models/IPost"
import cl from "../styles/page.module.css";

interface PostItemProps {
  post: IPost;
  className?: string;
}

const PostItem: FC<PostItemProps> = ({ post, className }) => {
  let style = [cl.postMainElement];
  className && style.push(className); 

  return (
    <div className={style.join(' ')}>
      {post.id}. {post.text}
    </div>
  )
};

export default PostItem;