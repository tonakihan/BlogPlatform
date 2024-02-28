import { Sequelize } from 'sequelize';

export default new Sequelize({
  dialect: "postgres",
  host: process.env.POSTGRES_HOST || 'localhost',
  database: process.env.POSTGRES_DATABASE_NAME,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD
  //port:
});
