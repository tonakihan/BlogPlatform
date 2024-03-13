/**
 * Отвечает за обработку запросов и выдачу результата: user
 */
import type { Response, Request } from "express"
import User from "../models/user.model";
import userRepository from "../repositories/user.repository";

class UserController {
  async create(req: Request, res: Response) {
    //TODO: сделать поиск пользователя и вернуть нормальную ошибку
    let user: User = req.body;

    try {  
      let savedUser = await userRepository.save(user);
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async remove(req: Request, res: Response) {
    let id: number = parseInt(req.params.id, 10);

    try {
      let resultCode = await userRepository.delete(id);

      if (resultCode == 1) 
        res.status(200).send({
          message: "User was deleted successfully!"
        });
      else
        res.status(400).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        });
    } catch (err) {
      res.status(500).send({
        message: `Could not delete Post with id=${id}.`
      });
    }
  }

  async update(req: Request, res: Response) {
    let user: User = req.body;

    // Обрабатываю возможную ошибку 
    if (!user.id) {
      res.status(400).send({
          message: "Not fount id in body"
      });
      return;
    }

    try {
      let resultCode = await userRepository.update(user);
      
      if (resultCode == 1)
        res.status(200).send({
          message: "User was updated successfully!"
        });
      else 
        res.status(400).send({
          message: `Cannot update User with id=${user.id}. Maybe User was not found or req.body is empty!`
        });
    } catch (err) {
      res.status(500).send({
        message: `Error updating User with id=${user.id}.`
      });
    }
  }

  async get(req: Request, res: Response) {
    let id: number = parseInt(req.params.id, 10);

    try {
      let user: User|null = await userRepository.retrieveById(id);

      if (user)
        res.status(200).send(user);
      else 
        res.status(400).send({
          message: `Cannot find User with id=${id}.`
        });
    } catch (err) {
      res.status(400).send({
        message: `Not found user by ${id}`
      });
    }
  }
  
  async getAll(req: Request, res: Response) {
    try {
      let users: User[] = await userRepository.retrieveAll();
      res.status(200).send(users);
    } catch (err) {
      res.status(500).json({
        message: "Error"
      })
    }
  }
}

export default new UserController();
