import { Application } from "express";
import userRouter from "./user.routes";
import postRouter from "./post.routes";
import subscribeRoutes from "./subscribe.routes";

//TODO: Добавить проверку полей запроса сюды
class Routes {
  constructor(app: Application) {
    app.use("/api/user", userRouter);
    app.use("/api/post", postRouter);
    app.use("/api/subscribe", subscribeRoutes);
  }
}

export default Routes;
