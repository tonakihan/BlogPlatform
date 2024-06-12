import { Application } from "express";
import userRouter from "./user.routes";
import postRouter from "./post.routes";
import subscribeRoutes from "./subscribe.routes";
import commentRoutes from "./comment.routes";
import frontendRoutes from "./frontend.router";

class Routes {
  constructor(app: Application) {
    app.use("/api/user", userRouter);
    app.use("/api/post", postRouter);
    app.use("/api/subscribe", subscribeRoutes);
    app.use("/api/comment", commentRoutes);
    app.use("*", frontendRoutes);
  }
}

export default Routes;
