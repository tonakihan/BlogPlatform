import { Router } from "express";
import CommentController from "../controllers/comment.controller"

class CommentRouter {
  router = Router();

  constructor() {
    this.intializeRoutes(); 
  }

  intializeRoutes() {
    this.router.get('/:id', CommentController.get);
    this.router.get('/byPost/:id', CommentController.getByPostId);
    this.router.get('/byUser/:id', CommentController.getByUserId);
    this.router.post('', CommentController.create);
    this.router.put('', CommentController.update);
    this.router.delete('/:id', CommentController.remove);
    // Для отладки
    this.router.get('/', CommentController.getAll);
  }
}

export default new CommentRouter().router; // Инициализация router => Обращение к router
