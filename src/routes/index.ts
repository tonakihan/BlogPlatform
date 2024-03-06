import { Application } from "express";
import userRouter from "./user.routes";
import postRouter from "./post.routes";

//TODO: Добавить проверку полей запроса сюды
class Routes {
  constructor(app: Application) {
    app.use("/api/user", userRouter);
    app.use("/api/post", postRouter);
  }
}

export default Routes;
