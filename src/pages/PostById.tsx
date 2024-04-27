import { useState, type FC, type SyntheticEvent } from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import PostItem from "../components/PostItem";
import cl from "../styles/post.module.css";
import { useAddCommentMutation, useGetCommentsByPostIdQuery } from "../services/commentsAPI";
import { useGetPostsQuery } from "../services/postsAPI";
import { useAppSelector } from "../hooks/redux/useAppSelector";
import MyButton from "../components/UI/button/MyButton";
import CommentList from "../components/CommentList";
import type { IComment } from "../models/IComment";

type PostByIdParams = {
  id: string;
}

//TODO: КОСТЫЛИЩЕ! Переделать под использование отдельной функции...
const PostById: FC = () => {
  // Получение параметров из URL
  const { id } = useParams<PostByIdParams>();
  const postId = parseInt(id, 10);
  // Получение всех постов из redux
  const { data: posts, isLoading: isLoadingPosts, error: errorPosts } = useGetPostsQuery();
  // Получение комментариев - commentAPI
  const { data: comments, isLoading: isLoadingComments, error: errorComments } = useGetCommentsByPostIdQuery(postId);
  const [addComment] = useAddCommentMutation();
  // Auth
  const { isAuth, userInfo } = useAppSelector( state=> state.auth );
  // Other
  const [formData, setFormData] = useState({text: ''});

  if (!id || isNaN(postId)) 
    return (<Error message="Не могу понять id"/>);

  if (errorPosts || errorComments) {
    console.error(
      `Error page PostByID:\n` +
      ` comments = ${comments}\n` +
      ` post = ${posts}`
    );
    console.error(
      `Error Posts = ${errorPosts}` +
      `Error Comments = ${errorComments}`
    );
    return (<Error message="Что-то пошло не так."/>);
  }

  if (isLoadingPosts || isLoadingComments) 
    return (<Loading/>);

  // Получение конкретного поста
  const post = posts.find(post => post.id === postId);

  const handleSubmit = ( e: SyntheticEvent<HTMLFormElement> ) => {
    e.preventDefault();

    let newComment: IComment = {
      authorId: userInfo.id, // TODO: Заменить на authorId бы на сервере
      postId: postId, 
      ...formData
    }

    try {
      addComment(newComment);
      setFormData({text: ''});
    } catch (e) {
      console.log(e);
      alert("Произошла ошибка. Передайте информацию разработчику, как это случилось.");
    }
  }

  return (
    <div>
      <PostItem post={post}/>
      <div className={cl.comments}>
        {comments.length > 0 
        ? <div>
            <h2>Комментарии</h2>
            <CommentList comments={comments} />
          </div>
        : <h2>Комментарии не обнаружены</h2>
        }
        {isAuth 
        ? <form className={cl.form} onSubmit={handleSubmit}>
            <textarea 
              value={formData.text}
              onChange={event => setFormData({ ...formData, text: event.target.value })}
              placeholder="Напиши свой комментарий тут"
            >
            </textarea>
            <MyButton type="submit">Внести свою лепту</MyButton>
          </form>
        : <div>
            <p>Для того, чтобы оставить свой комментарий необходимо авторизоваться</p>
          </div>
        }
      </div>
    </div>
  );
};

export default PostById;