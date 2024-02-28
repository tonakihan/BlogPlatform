import { Sequelize } from 'sequelize-typescript';
import { config, dialect } from "./config/db.config";
import User from './models/user.model';
import Post from './models/post.model';
import Subscribe from './models/subscribe.model';
import Comments from './models/comment.model';

class Database {
  public sequelize: Sequelize | undefined;

  constructor() {
    this.connectToDatabase();
  }

  private async connectToDatabase() {
    this.sequelize = new Sequelize({
      dialect,
      host: config.host,
      username: config.user,
      password: config.password,
      database: config.databaseName,
      pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
      },
      models: [User, Post, Subscribe, Comments]
    });
    
    await this.sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((err) => {
        console.error("Unable to connect to the Database: ", err);
      });
  }
}

export default Database;