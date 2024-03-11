/**
 * Отвечает за операции с базой данных: users
 * Поля user:
 *   id?
 *   nickname
 *   firstName
 *   lastName
 *   email
 *   role
 */
import User from "../models/user.model";

interface IUserRepository {
  save(user: User): Promise<User>;
  retrieveAll(): Promise<User[]>;
  retrieveById(userId: number): Promise<User | null>;
  update(user: User): Promise<number>;
  delete(userId: number): Promise<number>;
}

class UserRepository implements IUserRepository {
  async save(user: User): Promise<User> {
  /**
   * Создаст нового user в БД
   */
    try {
      return await User.create({
        firstName: user.firstName,
        lastName: user.lastName,
        nickname: user.nickname,
        email: user.email,
        role: user.role
      });
    } catch (err) {
      throw new Error("Failed to create User!");
    }  
  }

  async retrieveAll(): Promise<User[]> {
    /**
     * Вернет всех users
     */
    //TODO: Добавить поиск по запросу (совпадение поиск и результат)
    try {
      return await User.findAll();
    } catch (err) {
      throw new Error("Failed to retrieve User!");
    }
  }

  async retrieveById(userId: number): Promise<User | null> {
  /**
   * Вернет одного user по его id
   */
    try {
      return await User.findByPk(userId);
    } catch (err) {
      throw new Error("Failed to retrieve User!");
    }
  }

  async update(user: User): Promise<number> {
  /**
   * Получает user и обновляет запись в БД.
   * Обязательно нужно поле id.
   * При успехе возвращает 1
   */
    let { id, ...data } = user;

    try {
      let affectedRows = await User.update(
        { ...data },
        { where: { id: id } }
      );
      return affectedRows[0];
    } catch (err) {
      throw new Error("Failed to update User!");
    }
  }

  async delete(userId: number): Promise<number> {
  /**
   * Удаляет пользователя по его id
   * При успехе возвращает 1
   */
  // TODO: добавить удаление подписок
    try {
      let affectedRows = User.destroy(
        { where: { id: userId } }
      );

      return affectedRows;
    } catch (err) {
      throw new Error("Failed to delete User!");
    }
  }
}

export default new UserRepository();
