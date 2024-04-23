import type { FC } from "react";
import type { IComment } from "../models/IComment";
import type { IHtmlElement } from "../types/IHtmlElement";
import cl from "../styles/post.module.css";

interface CommentItemProps extends IHtmlElement {
  comment: IComment,
}

const CommentItem: FC<CommentItemProps> = ({comment, className}) => {
  let style = [cl.commentItem];
  className && style.push(className);
  return (
    <div className={style.join(' ')}>
      <hr/>
      <div className={cl.commentItemContent}>
        <p>Author {comment.authorId}.</p> 
        <p>{comment.text}.</p> 
        <p>Likes {comment.likes}</p>
      </div>
    </div>
  );
}

export default CommentItem;