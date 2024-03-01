import express, { Application } from "express";
import Routes from "./routes";
import Database from "./db";
//import cors, { CorsOptions } from "cors"; //TODO: Фундаменд под cors

export default class Server {
  constructor(app: Application) {
    this.config(app);
    this.syncDatabase();
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

  private syncDatabase(): void {
    const db = new Database();
    db.sequelize?.sync(); //TODO: Что это 
  }
}
