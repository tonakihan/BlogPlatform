import type { FC } from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import PostItem from "../components/PostItem";
import cl from "../styles/post.module.css";
import { useGetCommentsByPostIdQuery } from "../services/commentsAPI";
import CommentItem from "../components/CommentItem";
import { useGetPostsQuery } from "../services/postsAPI";

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
  // Получение комментариев
  const {data: comments, isLoading: isLoadingComments, error: errorComments} = useGetCommentsByPostIdQuery(postId);

  if (!id || isNaN(postId)) 
    return (<Error message="Не могу понять id"/>);

  if (errorPosts || errorComments) {
    console.log(
      `Error page PostByID:\n` +
      ` comments = ${comments}\n` +
      ` post = ${posts}`
    );
    console.log(
      `Error Posts = ${errorPosts}` +
      `Error Comments = ${errorComments}`
    )
    return (<Error message="Что-то пошло не так."/>);
  }

  if (isLoadingPosts || isLoadingComments) 
    return (<Loading/>);

  // Получение конкретного поста
  const post = posts.find(post => post.id === postId);

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
          : <h2>Комментарии не обнаружены</h2>
        }
        {/* TODO создать коммент */}
      </div>
    </div>
  );
};

export default PostById;