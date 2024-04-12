import { useEffect, type FC } from "react";
import { fetchPosts } from "../store/thunk/postThunk";
import { useAppDispatch } from "../hooks/redux/useAppDispatch";
import { useAppSelector } from "../hooks/redux/useAppSelector";
import MyButton from "../components/UI/button/MyButton";
import PostList from "../components/PostList";
import cl from "../styles/post.module.css"

const Posts: FC = () => {
  const { posts, isLoading, error } = useAppSelector( state => state.posts );
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) 
    return 
      <div className="absolute-center">
        <h1> Loading </h1>
      </div>

  // TODO: вынести в отдельную страницу
  if (error)
    return (
      <div className="error">
        <h1> Error </h1>
        <p>{error}</p>
        <p>Попробуй перезагрузить сайт</p>
      </div>
    );

  const createPost = () => {
    //TODO: createPost
    alert("Create post. Not implemented")
  }

  return (
    <div>
      <MyButton className={cl.buttonAddPost} onClick={() => createPost()}>
        Создай свой post!
      </MyButton>
      <PostList posts={posts}/>
    </div>
  );
}

export default Posts;