import { useEffect, type FC } from "react";
import { fetchPosts } from "../store/thunk/postThunk";
import { useAppDispatch } from "../hooks/redux/useAppDispatch";
import { useAppSelector } from "../hooks/redux/useAppSelector";
import MyButton from "../components/UI/button/MyButton";
import PostList from "../components/PostList";
import cl from "../styles/post.module.css"
import Error from "../components/Error";
import Loading from "../components/Loading";

const Posts: FC = () => {
  const { posts, isLoading, error } = useAppSelector( state => state.posts );
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) 
    return (<Loading/>);

  if (error)
    return (<Error message={error}/>);

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