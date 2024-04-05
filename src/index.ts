import express, { Application } from "express";
import Routes from "./routes";
import Database from "./db";
import { config as configEnv } from "dotenv";
import cors, { CorsOptions } from "cors"; //Мб снести в целях безопасности

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
  }

  private syncDatabase(): void {
    const db = new Database();
    db.sequelize?.sync(); //TODO: Что это 
  }
}
