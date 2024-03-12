import { Application } from "express";
import userRouter from "./user.routes";
import postRouter from "./post.routes";
import subscribeRoutes from "./subscribe.routes";
import commentRoutes from "./comment.routes";

class Routes {
  constructor(app: Application) {
    app.use("/api/user", userRouter);
    app.use("/api/post", postRouter);
    app.use("/api/subscribe", subscribeRoutes);
    app.use("/api/comment", commentRoutes);
  }
}

export default Routes;
