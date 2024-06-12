import { Router, Request, Response } from "express";

class FrontendRouter {
  router = Router();

  constructor () {
    this.intializeRoutes();
  }

  intializeRoutes () {

    if (process.env.NODE_ENV === 'production') {
      //Run frontend&backend on single server
      this.router.use("*", ( req: Request, res: Response ) => {
        res.sendFile("index.html", { root: __dirname + "../../../../static" });
      });
    }
  }
}

export default new FrontendRouter().router;