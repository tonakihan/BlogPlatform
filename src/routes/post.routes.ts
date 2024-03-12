import { Router } from "express";
import PostController from "../controllers/post.controller";
import { idValidate, applyValidator } from "../validations";
import { postDataValidate } from "../validations/post.validations";

class PostRouter {
  router = Router();

  constructor() {
    this.intializeRoutes(); 
  }

  intializeRoutes() {
    this.router.get('/', PostController.getAll);
    this.router.get('/:id', idValidate, applyValidator, PostController.get);
    this.router.post('', postDataValidate, applyValidator, PostController.create);
    this.router.put('', postDataValidate, applyValidator, PostController.update);
    this.router.delete('/:id', idValidate, applyValidator, PostController.remove);
  }
}

export default new PostRouter().router; // Инициализация router => Обращение к router
