import express, { Application } from "express";
import Routes from "./routes";
//import cors, { CorsOptions } from "cors"; //TODO: Фундаменд под cors

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {
/*    const corsOptions: CorsOptions = {
      origin: "http://localhost:3000" // Если будет использоваться, то изменить порт
    };

    app.use(cors(corsOptions));*/
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }
}
