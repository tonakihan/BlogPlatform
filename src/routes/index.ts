import { Application } from "express";
import userRouter from "./user.routes";

class Routes {
  constructor(app: Application) {
    app.use("/api/user", userRouter);
  }
}

export default Routes;
