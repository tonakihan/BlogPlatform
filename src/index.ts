import express from "express";
import type {Express, Request, Response} from "express";
import router from "./router";
import path from "path";
//import { Pool } from "pg";

const PORT = process.env.PORT || "3000";
const app: Express = express();
/*const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  password: process.env.POSTGRES_PASSWORD || '',
  database: process.env.POSTGRES_DATABASE_NAME,
});*/
app.use(express.static(path.basename('/build')));
app.use("/api", router);

/*app.get("/", (req: Request, res: Response) => {
  res.send("Express works! ('v')");
//  pool.query('SELECT * FROM users')
//    .then(result => res.send(result));
});*/

function main() {
  try {
    app.listen(PORT, () => {
      console.log(process.env);
      console.log(
        `Server launch. Listen port ${PORT}\n` +
        `http://localhost:${PORT}`
      );
    });
  } catch (e) {
    console.log(`Error: ${e}`);
  }
}

main();
