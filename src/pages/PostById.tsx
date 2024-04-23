import { useEffect, type FC } from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import { useAppSelector } from "../hooks/redux/useAppSelector";
import { useAppDispatch } from "../hooks/redux/useAppDispatch";
import { fetchPosts } from "../store/thunk/postThunk";
import Loading from "../components/Loading";
import PostItem from "../components/PostItem";
import cl from "../styles/post.module.css";
import { useGetCommentsByPostIdQuery } from "../services/commentsAPI";
import CommentItem from "../components/CommentItem";

type PostByIdParams = {
  id: string;
}

//TODO: КОСТЫЛИЩЕ! Переделать под использование отдельной функции...
const PostById: FC = () => {
  // Получение параметров
  const { id } = useParams<PostByIdParams>();
  const postId = parseInt(id, 10);

  // Получение всех постов из redux
  const { posts, isLoading: isLoadingPosts, error: errorPosts } = useAppSelector( state => state.posts );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Получение конкретного поста
  const post = posts.find(post => post.id === postId);

  // Получение комментариев
  const {data: comments, isLoading: isLoadingComments, error: errorComments} = useGetCommentsByPostIdQuery(postId);

  if (!id || isNaN(postId)) 
    return (<Error message="Не могу понять id"/>);

  if (isLoadingPosts || isLoadingComments) 
    return (<Loading/>);

  if (!post || !comments || errorPosts || errorComments) {
    console.log(
      `Error page PostByID:\n` +
      ` comments = ${comments}\n` +
      ` post = ${post}`
    );
    return (<Error message="Что-то пошло не так."/>);
  }

  return (
    <div>
      <PostItem post={post}/>
      <div className={cl.comments}>
      {comments.length > 0 
        ? <div>
          <h2>Комментарии</h2>
          {comments.map(comment => (
            <CommentItem key={comment.id} comment={comment}/>
          ))}
        </div>
        : <h2>Пока нет комментариев</h2>}
      </div>
    </div>
  );
};

export default PostById;