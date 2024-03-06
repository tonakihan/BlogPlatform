/**
 * Отвечает за операции с базой данных: posts
 * Поля post:
 *   id?
 *   authorUserId
 *   status
 *   filePath?
 *   likes?
 *   text
 */
import Post from "../models/post.model";
import User from "../models/user.model";

interface IPostRepository {
  save(post: Post): Promise<Post>;
  retrieveAll(): Promise<Post[]>;
  retrieveById(postId: number): Promise<Post | null>;
  update(post: Post): Promise<number>;
  delete(postId: number): Promise<number>;
}

class PostRepository implements IPostRepository {
  async save(post: Post): Promise<Post> {
  /**
   * Сохранит post в БД и вернет созданный post
  */
    try {
      return await Post.create({...post});
    } catch (err) {
      throw new Error("Failed to create Post!");
    }  
  }

  async retrieveAll(): Promise<Post[]> {
  /**
   * Вернет все записи из БД.
  */
    /*TODO: Сделать запрос пользователя и возвращать имя пользователя
      Вместо возврата Id author*/
    //TODO: Добавить поиск по запросу (совпадение поиск и результат)
    try {
      return await Post.findAll();
    } catch (err) {
      throw new Error("Failed to retrieve Post!");
    }
  }

  async retrieveById(postId: number): Promise<Post | null> {
  /**
   * Вернет однин post по его id
   */
    try {
      return await Post.findByPk(postId, {
        include: [User]
      });
    } catch (err) {
      throw new Error("Failed to retrieve Post!");
    }
  }

  async update(post: Post): Promise<number> {
  /**
   * Принимает эклемляр поста и обновляет запись в БД
   * Обязательно нужен id
   * При успехе возвращает 1
   */
    let { id, ...data } = post;

    try {
      let affectedRows = await Post.update(
        { ...data },
        { where: { id: id } }
      );
      return affectedRows[0];
    } catch (err) {
      throw new Error("Failed to update Post!");
    }
  }

  async delete(postId: number): Promise<number> {
  /**
   * Удаляет пост по его id
   * При успехе возвращает 1
   */
    try {
      let affectedRows = Post.destroy(
        { where: { id: postId } }
      );

      return affectedRows;
    } catch (err) {
      throw new Error("Failed to delete Post!");
    }
  }
}

export default new PostRepository();
