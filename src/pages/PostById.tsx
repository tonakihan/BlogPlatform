import { useEffect, type FC } from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import { useAppSelector } from "../hooks/redux/useAppSelector";
import { useAppDispatch } from "../hooks/redux/useAppDispatch";
import { fetchPosts } from "../store/thunk/postThunk";
import Loading from "../components/Loading";
import PostItem from "../components/PostItem";

type PostByIdParams = {
  id: string;
}

//TODO: КОСТЫЛИЩЕ! Переделать под использование отдельной функции...
const PostById: FC = () => {
  const { id } = useParams<PostByIdParams>();
  if (!id || isNaN(id)) 
    return (<Error message="Не могу понять id"/>);
  const postId = parseInt(id, 10);

  const { posts, isLoading, error } = useAppSelector( state => state.posts );
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const post = posts.find(post => post.id == postId);

  if (isLoading) 
    return (<Loading/>);

  if (!post || error)
    return (<Error message={error ?? "Не найден post"}/>);

  return (<PostItem post={post}/>);
};

export default PostById;