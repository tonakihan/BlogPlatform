import type {Response, Request} from "express"

class UserController {
  async create(req: Request, res: Response) {
    try {
      res.status(201).json({
        message: "create OK",
        reqBody: req.body
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async remove(req: Request, res: Response) {
    res.send("Remove user");
  }

  async update(req: Request, res: Response) {
    res.send("Update user");
  }

  async getOne(req: Request, res: Response) {
    res.send("Get one user");
  }
  
  async getAll(req: Request, res: Response) {
    res.send("Get all user");
  }
}

export default new UserController;
