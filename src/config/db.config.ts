import {config as dotconf} from "dotenv";
dotconf(); // Костыль - для node

export const config = {
  host: process.env.POSTGRES_HOST ? process.env.POSTGRES_HOST.toString() : 'localhost',
  user: process.env.DB_USER ? process.env.DB_USER.toString() : 'postgres',
  password: process.env.DB_PASSWORD?.toString(),
  databaseName: process.env.DB_NAME?.toString(),
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

export const dialect = 'postgres';