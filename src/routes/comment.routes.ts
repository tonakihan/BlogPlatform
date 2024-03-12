import { Router } from "express";
import CommentController from "../controllers/comment.controller";
import { idValidate, applyValidator } from "../validations";

class CommentRouter {
  router = Router();

  constructor() {
    this.intializeRoutes(); 
  }

  intializeRoutes() {
    this.router.get('/:id', idValidate, applyValidator, CommentController.get);
    this.router.get('/by_Post/:id', idValidate, applyValidator, CommentController.getByPostId);
    this.router.get('/by_User/:id', idValidate, applyValidator, CommentController.getByUserId);
    this.router.post('', CommentController.create);
    this.router.put('', CommentController.update);
    this.router.delete('/:id', idValidate, applyValidator, CommentController.remove);
    // Для отладки
    //this.router.get('/', CommentController.getAll);
  }
}

export default new CommentRouter().router; // Инициализация router => Обращение к router
