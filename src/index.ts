import express, { Application } from "express";
import Routes from "./routes";
import Database from "./db";
import { config as configEnv } from "dotenv";
import cors, { CorsOptions } from "cors"; //TODO: Мб снести в целях безопасности?
import path from "path";

export default class Server {
  constructor(app: Application) {
    this.config(app);
    this.syncDatabase();
    new Routes(app);
  }

  private config(app: Application): void {
    configEnv();
    
    const corsOptions: CorsOptions = {
      origin: `http://localhost:${process.env.FRONTEND_PORT}`
    }
    
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, "../../static")));
    }
  }

  private syncDatabase(): void {
    const db = new Database();
    db.sequelize?.sync();
  }
}
