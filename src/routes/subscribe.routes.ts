import { Router } from "express";
import SubscribeController from "../controllers/subscribe.controller";

class SubscribeRouter {
  router = Router();

  constructor() {
    this.intializeRoutes(); 
  }

  intializeRoutes() {
    this.router.post('', SubscribeController.create);
    this.router.delete('/:id', SubscribeController.remove);
    this.router.get('/:id', SubscribeController.get);
    this.router.get('/count/subscribers/:id', SubscribeController.getCountSubscribers);
    this.router.get('/count/subscriptions/:id', SubscribeController.getCountSubscriptions);
    // Для отладки!
    //this.router.get('', SubscribeController.getAll);
  }
}

export default new SubscribeRouter().router; // Инициализация router => Обращение к router
