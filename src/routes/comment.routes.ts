import { Router } from "express";
import CommentController from "../controllers/comment.controller";
import { validateIdParams } from "../validations/common.validations";

class CommentRouter {
  router = Router();

  constructor() {
    this.intializeRoutes(); 
  }

  intializeRoutes() {
    this.router.get('/:id', validateIdParams, CommentController.get);
    this.router.get('/by_Post/:id', validateIdParams, CommentController.getByPostId);
    this.router.get('/by_User/:id', validateIdParams, CommentController.getByUserId);
    this.router.post('', CommentController.create);
    this.router.put('', CommentController.update);
    this.router.delete('/:id', validateIdParams, CommentController.remove);
    // Для отладки
    //this.router.get('/', CommentController.getAll);
  }
}

export default new CommentRouter().router; // Инициализация router => Обращение к router
