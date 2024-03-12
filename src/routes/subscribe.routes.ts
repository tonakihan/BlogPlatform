import { Router } from "express";
import SubscribeController from "../controllers/subscribe.controller";
import { idValidate, applyValidator } from "../validations";
import { subscribeDataValidate } from "../validations/subscribe.validations";

class SubscribeRouter {
  router = Router();

  constructor() {
    this.intializeRoutes(); 
  }

  intializeRoutes() {
    this.router.post('', subscribeDataValidate, applyValidator, SubscribeController.create);
    this.router.delete('/:id', idValidate, applyValidator, SubscribeController.remove);
    this.router.get('/:id', idValidate, applyValidator, SubscribeController.get);
    this.router.get('/count/subscribers/:id', idValidate, applyValidator, SubscribeController.getCountSubscribers);
    this.router.get('/count/subscriptions/:id', idValidate, applyValidator, SubscribeController.getCountSubscriptions);
    // Для отладки!
    //this.router.get('', SubscribeController.getAll);
  }
}

export default new SubscribeRouter().router; // Инициализация router => Обращение к router
