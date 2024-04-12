import type { FC } from "react";
import type { IPost } from "../models/IPost"
import cl from "../styles/post.module.css";
import type { IHtmlElement } from "../types/IHtmlElement";

interface PostItemProps extends IHtmlElement {
  post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post, className }) => {
  let style = [cl.postMainElement];
  className && style.push(className); 

  return (
    <div className={style.join(' ')}>
      {post.text}
    </div>
  )
};

export default PostItem;