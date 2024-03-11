/**
 * Отвечает за операции с базой данных: comments
 * Поля comment:
 *   id?
 *   authorId
 *   text
 *   postId
 *   likes?
 */

import Comment from "../models/comment.model";
import Post from "../models/post.model";
import User from "../models/user.model";

interface ICommentRepository {
  save(comment: Comment): Promise<Comment>;
  retrieveAll(): Promise<Comment[]>;
  retrieveById(commentId: number): Promise<Comment | null>;
  retrieveByPostId(postId: number): Promise<Comment[]>;
  retrieveByUserId(userId: number): Promise<Comment[]>;
  update(comment: Comment): Promise<number>;
  delete(commentId: number): Promise<number>;
}

class CommentRepository implements ICommentRepository {
  async save(comment: Comment): Promise<Comment> {
  /**
   * Создаст новый comment в БД
   */
    try {
      return await Comment.create({...comment});
    } catch (err) {
      throw new Error("Failed to create Comment!");
    }  
  }

  async retrieveAll(): Promise<Comment[]> {
    /**
     * Вернет все comments
     */
    try {
      return await Comment.findAll();
    } catch (err) {
      throw new Error("Failed to retrieve Comment!");
    }
  }

  async retrieveById(commentId: number): Promise<Comment | null> {
  /**
   * Вернет одиного comment по его id
   */
    try {
      return await Comment.findByPk(commentId);
    } catch (err) {
      throw new Error("Failed to retrieve Comment!");
    }
  }

  async retrieveByPostId(postId: number): Promise<Comment[]> {
    /**
     * Вернет все comments по post id
     */
    try {
      return await Comment.findAll({
        where: { postId },
        include: [User] 
      });
    } catch (err) {
      throw new Error("Failed to retrieve Comment!");
    }
  }

  async retrieveByUserId(userId: number): Promise<Comment[]> {
    /**
     * Вернет comments по users id
     */
      try {
        return await Comment.findAll({
          where: { authorId: userId },
          include: [User, Post] 
        });
      } catch (err) {
        throw new Error("Failed to retrieve Comment!");
      }
    }

  async update(comment: Comment): Promise<number> {
  /**
   * Получает comment и обновляет запись в БД.
   * Обязательно нужно поле id.
   * При успехе возвращает 1
   */
    let { id, ...data } = comment;

    try {
      let affectedRows = await Comment.update(
        { ...data },
        { where: { id: id } }
      );
      return affectedRows[0];
    } catch (err) {
      throw new Error("Failed to update Comment!");
    }
  }

  async delete(commentId: number): Promise<number> {
  /**
   * Удаляет comment по его id
   * При успехе возвращает 1
   */
    try {
      let affectedRows = Comment.destroy(
        { where: { id: commentId } }
      );

      return affectedRows;
    } catch (err) {
      throw new Error("Failed to delete Comment!");
    }
  }
}

export default new CommentRepository();
