import { useEffect, type FC } from "react";
import { useAppDispatch } from "../hooks/redux/useAppDispatch";
import { useAppSelector } from "../hooks/redux/useAppSelector";
import { fetchPosts } from "../store/thunk/postThunk";
import PostItem from "./PostItem";
import cl from "../styles/page.module.css"
import type { IPost } from "../models/IPost";
import MyButton from "../components/UI/button/MyButton";


const PostList: FC = () => {
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

  if (error)
    return (
      <div className="error">
        <h1> Error </h1>
        <p>{error}</p>
        <p>Попробуй перезагрузить сайт</p>
      </div>
    );

  const selectPost = (post: IPost) => {
    //TODO:Link to PostItem
    alert("Select post. Not implemented");
    console.log(post);
  }

  const createPost = () => {
    //TODO: createPost
    alert("Create post. Not implemented")
  }

  return (
    <div>
      <MyButton className={cl.buttonAddPost} onClick={() => createPost()}>
        Создай свой post!
      </MyButton>
      {posts.map(post => (
        <div onClick={() => selectPost(post)} key={post.id} >
          <PostItem post={post} className={cl.postListElement}/>
        </div>
      ))}
    </div>
  );
}

export default PostList;