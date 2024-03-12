/**
 * Отвечает за операции с базой данных: subscribe
 * Поля post:
 *   id?
 *   userTargetId
 *   userObjectId
 */
import Subscribe from "../models/subscribe.model";
import User from "../models/user.model";

interface ISubscribeRepository {
  save(subscribe: Subscribe): Promise<Subscribe>;
  delete(subscribeId: number): Promise<number>; 
  deleteAllByUserId(userId: number): Promise<number>;
  retrieveCountSubscriptions(userId: number): Promise<number>;
  retrieveCountSubscribers(userId: number): Promise<number>;
  retrieve(userId: number): Promise<Subscribe[]>;
}

class SubscribeRepository implements ISubscribeRepository {
  async save(subscribe: Subscribe): Promise<Subscribe> {
    try {
      return await Subscribe.create({...subscribe});
    } catch (e) {
      throw new Error("Failed to create subscribe!");
    }
  }

  async delete(subscribeId: number): Promise<number> {
  /**
   * Принимает номер записи subscribe в БД и удаляет
   */
    try {
      return await Subscribe.destroy({ 
        where: { id: subscribeId } 
      });
    } catch (err) {
      throw new Error("Filed to delite Subscribe!");
    }
  } 
  
  async deleteAllByUserId(userId: number): Promise<number> {
  /**
   * Для удаления пользователя и отчистки данных из БД 
   * (хотя там настроенно автоматическое удаление)
   */
    try {
      return await Subscribe.destroy({ 
        where: { userTargetId: userId } 
      });
    } catch (err) {
      throw new Error(`Filed to delete all subscribers by userId = ${userId}`);
    }
  }
  
  async retrieveCountSubscriptions(userId: number): Promise<number> {
  /**
   * Вернет кол-во на кого подписан пользователь
   */
    try {
      return await Subscribe.count({ 
        where: { userTargetId: userId } 
      });
    } catch (err) {
      throw new Error("Filed to get count Subscriptions!");
    }
  }
  
  async retrieveCountSubscribers(userId: number): Promise<number> {
  /**
   * Вернет кол-во подписчиков у пользователя
   */
    try {
      return await Subscribe.count({ 
        where: { userObjectId: userId } 
      });
    } catch (err) {
      throw new Error("Filed to get count Subscribers!");
    }
  }
  
  async retrieve(userId: number): Promise<Subscribe[]> {
  /**
   * Вернет подписки с пользователями
   * Принимет id пользователя, для которого это нужно
   */
    try {
      return await Subscribe.findAll({ 
        where: { userTargetId: userId },
        include: [
          //{model: User, as: 'userTarget'},
          {model: User, as: 'userObject'}
        ] 
      });
    } catch (err) {
      throw new Error("Failed to retrieve Subscriptions");
    }
  }

  async retriveAll(): Promise<Subscribe[]> {
  /**
   * Для отладки. Вернет все содержимое в БД
   */
    try {
      return await Subscribe.findAll();
    } catch (err) {
      throw new Error("Failed to retrieve Subscriptions");
    }
  }
}

export default new SubscribeRepository();
