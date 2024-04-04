import { useEffect } from "react";
import { useAppDispatch } from "../hooks/redux/useAppDispatch";
import { useAppSelector } from "../hooks/redux/useAppSelector";
import { fetchPosts } from "../store/thunk/postThunk";


function PostList () {
  const { posts, isLoading, error } = useAppSelector( state => state.posts );
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts());
  });

  if (isLoading) {
    return <h1> Loading </h1>
  }

  if (error) {
    return (
      <div>
        <h1> Error </h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          {post.id}. {post.text}
        </div>
      ))}
    </div>
  );
}

export default PostList;