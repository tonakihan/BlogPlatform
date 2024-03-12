import { Router } from "express";
import PostController from "../controllers/post.controller";
import { middlewareChain, validateIdParams } from "../validations/common.validations";
import { postDataValidate } from "../validations/post.validations";

class PostRouter {
  router = Router();

  constructor() {
    this.intializeRoutes(); 
  }

  intializeRoutes() {
    this.router.get('/', PostController.getAll);
    this.router.get('/:id', validateIdParams, PostController.get);
    this.router.post('', postDataValidate, middlewareChain, PostController.create);
    this.router.put('', postDataValidate, middlewareChain, PostController.update);
    this.router.delete('/:id', validateIdParams, PostController.remove);
  }
}

export default new PostRouter().router; // Инициализация router => Обращение к router
