/**
 * Отвечает за обработку запросов и выдачу результата: comments
 */
import type {Response, Request} from "express"
import Comment from "../models/comment.model";
import commentRepository from "../repositories/comment.repository";

class CommentController {
  async create(req: Request, res: Response) {
    //TODO: Запилить нормально на уровне express-v...
    if (!req.body.text) {
      res.status(400).json({
        message: "Content can not be empty!"
      });
      return;
    }
    try {
      let comment: Comment = req.body;
      let savedComment = await commentRepository.save(comment);

      res.status(201).json(savedComment);
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async remove(req: Request, res: Response) {
    let id: number = parseInt(req.params.id, 10);

    try {
      let resultCode = await commentRepository.delete(id);

      if (resultCode == 1) {
        res.status(200).send({
          message: "Comment was deleted successfully!"
        });
      } else {
        res.status(400).send({
          message: `Cannot delete Comment with id=${id}. Maybe Comment was not found!`,
        });
      }
    } catch (err) {
      res.status(500).send({
        message: `Could not delete Comment with id=${id}.`
      });
    }
  }

  async update(req: Request, res: Response) {
    let comment: Comment = req.body;

    try {
      let resultCode = await commentRepository.update(comment);
      
      if (resultCode == 1) {
        res.status(200).send({
          message: "Comment was updated successfully."
        });
      } else {
        res.status(400).send({
          message: `Cannot update Comment with id=${comment.id}. Maybe Comment was not found or req.body is empty!`
        });
      } 
    } catch (err) {
      res.status(500).send({
        message: `Error updating Comment with id=${comment.id}.`
      });
    }
  }

  async get(req: Request, res: Response) {
    //TODO: Мб обработать ошибку
    let id: number = parseInt(req.params.id, 10);

    try {
      let comment: Comment|null = await commentRepository.retrieveById(id);

      if (comment)
        res.status(200).send(comment);
      else 
        res.status(400).send({
          message: `Cannot find Comment with id=${id}.`
        });
    } catch (err) {
      res.status(400).send({
        message: `Not found comment by ${id}`
      });
    }
  }
  
  async getByPostId(req: Request, res: Response) {
    try {
      let postId = parseInt(req.params.id, 10);
      let comments: Comment[] = await commentRepository.retrieveByPostId(postId);

      res.status(200).send(comments);
    } catch (err) {
      res.status(500).json({
        message: "Error"
      })
    }
  }

  async getByUserId(req: Request, res: Response) {
    try {
      let userId = parseInt(req.params.id, 10);
      let comments: Comment[] = await commentRepository.retrieveByUserId(userId);

      res.status(200).send(comments);
    } catch (err) {
      res.status(500).send({
        message: "Error"
      })
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      let comments: Comment[] = await commentRepository.retrieveAll();
      res.status(200).send(comments);
    } catch (err) {
      res.status(500).json({
        message: "Error"
      })
    }
  }
}

export default new CommentController();
