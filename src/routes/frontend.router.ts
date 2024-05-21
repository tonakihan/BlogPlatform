import { Router, Request, Response } from "express";

class FrontendRouter {
  router = Router();

  constructor () {
    this.intializeRoutes();
  }

  intializeRoutes () {
    this.router.use("*", ( req: Request, res: Response ) => {
      res.sendFile("index.html", { root: __dirname + "../../../public" });
    });
  }
}

export default new FrontendRouter().router;