import express from "express";
import type {Express, Request, Response} from "express";
//import { Pool } from "pg";

const app: Express = express();
/*const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  password: process.env.POSTGRES_PASSWORD || '',
  database: process.env.POSTGRES_DATABASE_NAME,
});*/
const PORT = process.env.PORT || "3000";

app.get("/", (req: Request, res: Response) => {
  res.send("Express works! ('v')");
//  pool.query('SELECT * FROM users')
//    .then(result => res.send(result));
});

app.listen(PORT, () => {
  console.log(
    `Server launch. Listen port ${PORT}\n` +
    `http://localhost:${PORT}`
  );
});
