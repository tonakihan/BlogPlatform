import { Router } from "express";
import UserController from "../controllers/user.controller"
import { idValidate, applyValidator } from "../validations";
import { userDataValidate } from "../validations/user.validation";

class UserRouter {
  router = Router();

  constructor() {
    this.intializeRoutes(); 
  }

  intializeRoutes() {
    this.router.get('/', UserController.getAll);
    this.router.get('/:id', idValidate, applyValidator, UserController.get);
    this.router.post('', userDataValidate, applyValidator, UserController.create);
    this.router.put('', userDataValidate, applyValidator, UserController.update);
    this.router.delete('/:id', idValidate, applyValidator, UserController.remove);
  }
}

export default new UserRouter().router; // Инициализация router => Обращение к router
