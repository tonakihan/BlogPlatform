import { Router } from "express";
import PostController from "../controllers/post.controller"

class PostRouter {
  router = Router();

  constructor() {
    this.intializeRoutes(); 
  }

  intializeRoutes() {
    this.router.get('/', PostController.getAll);
    this.router.get('/:id', PostController.getOne);
    this.router.post('', PostController.create);
    this.router.put('', PostController.update);
    this.router.delete('/:id', PostController.remove);
  }
}

export default new PostRouter().router; // Инициализация router => Обращение к router
