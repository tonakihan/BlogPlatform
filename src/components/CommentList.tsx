import type { FC } from "react";
import type { IComment } from "../models/IComment";
import CommentItem from "./CommentItem";

interface CommentListProps {
  comments: IComment[]
}

const CommentList: FC<CommentListProps> = ({ comments }) => {
  return (
    <div>
      {comments.map(comment => (
        <CommentItem key={comment.id} comment={comment}/>
      ))}
    </div>
  );
}

export default CommentList;