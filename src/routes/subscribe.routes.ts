import { Router } from "express";
import SubscribeController from "../controllers/subscribe.controller";
import { validateIdParams } from "../validations/common.validations";

class SubscribeRouter {
  router = Router();

  constructor() {
    this.intializeRoutes(); 
  }

  intializeRoutes() {
    this.router.post('', SubscribeController.create);
    this.router.delete('/:id', validateIdParams, SubscribeController.remove);
    this.router.get('/:id', validateIdParams, SubscribeController.get);
    this.router.get('/count/subscribers/:id', validateIdParams, SubscribeController.getCountSubscribers);
    this.router.get('/count/subscriptions/:id', validateIdParams, SubscribeController.getCountSubscriptions);
    // Для отладки!
    //this.router.get('', SubscribeController.getAll);
  }
}

export default new SubscribeRouter().router; // Инициализация router => Обращение к router
