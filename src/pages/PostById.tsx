import type { FC } from "react";
import { useParams } from "react-router-dom";

type PostByIdParams = {
  id: string;
}

const PostById: FC = () => {
  const { id } = useParams<PostByIdParams>();

  if (!id || isNaN(id)) {
    //TODO: вынести
    return ( 
      <div className="error">
        <h1>Error</h1>
        <p>PostById</p>
      </div>
    );
  }
  const postId = parseInt(id, 10);

  //TODO: реализовать поддержку со стороны redux и отрисовку компонента

  return (
    <div>ТИПО ПОСТ id = {postId}</div>
  );
};

export default PostById;