import type { FC } from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Error";

type PostByIdParams = {
  id: string;
}

const PostById: FC = () => {
  const { id } = useParams<PostByIdParams>();

  if (!id || isNaN(id)) 
    return (<Error message="Не могу понять id"/>);
  
  const postId = parseInt(id, 10);

  //TODO: реализовать поддержку со стороны redux и отрисовку компонента
  return (
    <div>ТИПО ПОСТ id = {postId}</div>
  );
};

export default PostById;