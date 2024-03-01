import { Sequelize } from 'sequelize-typescript';
import { config, dialect } from "./config/db.config";

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
      models: [__dirname + '/models']
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