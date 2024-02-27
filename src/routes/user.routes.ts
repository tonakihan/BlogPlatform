import { Router } from "express";
import UserController from "../controllers/user.controller"

class UserRouter {
  router = Router();

  constructor() {
    this.intializeRoutes(); 
  }

  intializeRoutes() {
    this.router.get('/', UserController.getAll);
    this.router.get('/:id', UserController.getOne);
    this.router.post('', UserController.create);
    this.router.put(':id', UserController.update);
    this.router.delete(':id', UserController.remove);
  }
}

export default new UserRouter().router; // Инициализация router => Обращение к router
