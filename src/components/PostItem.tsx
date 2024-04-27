import type { FC } from "react";
import type { IPost } from "../models/IPost"
import cl from "../styles/post.module.css";
import type { IHtmlElement } from "../types/IHtmlElement";

interface PostItemProps extends IHtmlElement {
  post: IPost;
  type: 'list' | 'item';
}

const PostItem: FC<PostItemProps> = ({ post, className, type='item' }) => {
  let style = [cl.postMainElement];
  className && style.push(className); 

  let text: string;
  if (type === 'list') {
    //Высчитать кол-во элементов
    text = post.text.slice(0, 470);
    if (post.text.length > 470)
      text += '...';
  } 
  else {
    text=post.text;
  }
  return (
    <div className={style.join(' ')}>
      {text}
    </div>
  )
};

export default PostItem;