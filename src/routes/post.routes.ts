import { Router } from "express";
import PostController from "../controllers/post.controller";
import { validateIdParams } from "../validations/common.validations";

class PostRouter {
  router = Router();

  constructor() {
    this.intializeRoutes(); 
  }

  intializeRoutes() {
    this.router.get('/', PostController.getAll);
    this.router.get('/:id', validateIdParams, PostController.get);
    this.router.post('', PostController.create);
    this.router.put('', PostController.update);
    this.router.delete('/:id', validateIdParams, PostController.remove);
  }
}

export default new PostRouter().router; // Инициализация router => Обращение к router
