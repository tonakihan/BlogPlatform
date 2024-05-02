import { useState, type FC, type SyntheticEvent } from "react";
import { useAppSelector } from "../hooks/redux/useAppSelector";
import MyButton from "../components/UI/button/MyButton";
import PostList from "../components/PostList";
import cl from "../styles/post.module.css"
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { useAddPostMutation, useGetPostsQuery } from "../services/postsAPI";
import type { IPost } from "../models/IPost";
import ReactModal from "react-modal";
import type { IUser } from "../models/IUser";

const Posts: FC = () => {
  //postApi
  const { data: posts, isLoading, error } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();
  //Auth
  const { isAuth, userInfo } = useAppSelector( state => state.auth );
  //Other
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({text: ''});

  if (isLoading) 
    return (<Loading/>);

  if (error)
    return (<Error message={error as string}/>);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handlerCreateModal = () => {
    if (isAuth) {
      openModal();
    }
    else {
      navigate('/login');
    }
  };

  const handlerSubmit = async ( e: SyntheticEvent<HTMLFormElement> ) => {
    e.preventDefault();

    let newPost: IPost = {
      authorId: (userInfo as IUser).id,
      status: 'visable', // TODO: Изменить если будет модерация
      ...formData
    }

    try {
      await addPost(newPost).unwrap();
      setFormData({text: ''});
      closeModal();
    } catch (e) {
      console.error('reject', e);
      alert("Ошибка. Пост не был создан. Возможно нарушены правила создания поста.");
    }
  }

  return (
    <div>
      <MyButton className={cl.buttonAddPost} onClick={handlerCreateModal}>
        Создать свой post!
      </MyButton>
      {posts.length > 0 
        ? <PostList posts={posts as IPost[]}/>
        : <h2>Будь первым, создай post!</h2>
      }
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <form onSubmit={handlerSubmit}>
          <div>
            <label htmlFor="text">Содержание поста</label>
            <br/>
            <textarea 
              id="text" 
              value={formData.text} 
              onChange={event => setFormData({...formData, text: event.target.value})}
            ></textarea>
            {/* TODO: Стелизацию */}
          </div>
          <MyButton onClick={closeModal}>Отмена</MyButton>
          <MyButton type="submit">Показать всему миру!</MyButton>
        </form>
      </ReactModal>
    </div>
  );
}

export default Posts;