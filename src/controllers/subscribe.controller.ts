import Subscribe from "../models/subscribe.model";
import subscribeRepository from "../repositories/subscribe.repository";
import {Response, Request} from "express";

class SubscribeController {
  async create(req: Request, res: Response) {
    let subscribe: Subscribe = req.body;

    try {
      let savedSubscribe = await subscribeRepository.save(subscribe);
      res.status(201).send(savedSubscribe);
    } catch (err) {
      res.status(500).send({
        message: "Internal Server Error!"
      });
    }
  }

  async remove(req: Request, res: Response) {
    let userId: number = parseInt(req.params.id, 10); 

    try {
      let resultCode = await subscribeRepository.delete(userId);

      if (resultCode == 1) 
        res.status(200).send({
          message: "was deleted successfully!"
        });
      else 
        res.status(400).send({
          message: `Cannot delete User with id=${userId}. Maybe User was not found!`
        });
    } catch (err) {
      res.status(500).send({
        message: "Internal Server Error!"
      });
    }
  }

  async get(req: Request, res: Response) {
    let userId: number = parseInt(req.params.id ,10);

    try {
      let subscribers = await subscribeRepository.retrieve(userId);
      res.status(200).send(subscribers);
    } catch (err) {
      res.status(500).send({
        message: "Internal Server Error!"
      });
    }
  }

  async getCountSubscribers(req: Request, res: Response) {
    let userId: number = parseInt(req.params.id, 10);

    try { 
      let count = await subscribeRepository.retrieveCountSubscribers(userId);
      res.status(200).send({count});
    } catch (err) {
      res.status(500).send({
        message: "Internal Server Error!"
      });
    }
  }

  async getCountSubscriptions(req: Request, res: Response) {
    let userId: number = parseInt(req.params.id, 10);

    try {
      let count = await subscribeRepository.retrieveCountSubscriptions(userId);
      res.status(200).send({count});
    } catch (err) {
      res.status(500).send({
        message: "Internal Server Error!"
      });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      let subscribers = await subscribeRepository.retriveAll();
      res.status(200).send(subscribers);
    } catch (err) {
      res.status(500).send({
        message: "Internal Server Error!"
      });
    }
  }
}

export default new SubscribeController();