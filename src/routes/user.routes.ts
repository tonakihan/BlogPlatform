import { Router } from "express";
import UserController from "../controllers/user.controller"
import { validateIdParams } from "../validations/common.validations";
import { userDataValidate } from "../validations/user.validation";

class UserRouter {
  router = Router();

  constructor() {
    this.intializeRoutes(); 
  }

  intializeRoutes() {
    this.router.get('/', UserController.getAll);
    this.router.get('/:id', validateIdParams, UserController.get);
    this.router.post('', userDataValidate, UserController.create);
    this.router.put('', userDataValidate, UserController.update);
    this.router.delete('/:id', validateIdParams, UserController.remove);
  }
}

export default new UserRouter().router; // Инициализация router => Обращение к router
