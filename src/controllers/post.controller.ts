/**
 * Отвечает за обработку запросов и выдачу результата: post
 */
import type {Response, Request} from "express"
import Post from "../models/post.model";
import postRepository from "../repositories/post.repository";

class PostController {
  async create(req: Request, res: Response) {
    try {
      let post: Post = req.body;
      let savedPost = await postRepository.save(post);

      res.status(201).json(savedPost);
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async remove(req: Request, res: Response) {
    let id: number = parseInt(req.params.id, 10);

    try {
      let resultCode = await postRepository.delete(id);

      if (resultCode == 1) 
        res.status(200).send({
          message: "Post was deleted successfully!"
        });
      else 
        res.status(400).send({
          message: `Cannot delete Post with id=${id}. Maybe Post was not found!`,
        });
    } catch (err) {
      res.status(500).send({
        message: `Could not delete Post with id=${id}.`
      });
    }
  }

  async update(req: Request, res: Response) {
    let post: Post = req.body;

    // Обрабатываю возможную ошибку
    if (!post.id) {
      res.status(400).send({
        message: "Not fount id in body"
      });
      return;
    }

    try {
      let resultCode = await postRepository.update(post);
      
      if (resultCode == 1) {
        res.status(200).send({
          message: "Post was updated successfully."
        });
      } else {
        res.status(400).send({
          message: `Cannot update Post with id=${post.id}. Maybe Post was not found or req.body is empty!`
        });
      } 
    } catch (err) {
      res.status(500).send({
        message: `Error updating Post with id=${post.id}.`
      });
    }
  }

  async get(req: Request, res: Response) {
    let id: number = parseInt(req.params.id, 10);

    try {
      let post: Post|null = await postRepository.retrieveById(id);

      if (post)
        res.status(200).send(post);
      else 
        res.status(400).send({
          message: `Cannot find Post with id=${id}.`
        });
    } catch (err) {
      res.status(400).send({
        message: `Not found Post by ${id}`
      });
    }
  }
  
  async getAll(req: Request, res: Response) {
    try {
      let posts: Post[] = await postRepository.retrieveAll();
      res.status(200).send(posts);
    } catch (err) {
      res.status(500).json({
        message: "Error"
      })
    }
  }
}

export default new PostController();
