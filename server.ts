import express, { Application } from "express";
import Server from "./src/index";

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.BACKEND_PORT ? parseInt(process.env.BACKEND_PORT, 10) : 8080;

app
  .listen(PORT, "localhost", () => {
    console.log(process.env);
    console.log();
    console.log(
      `Server is running on port ${PORT}.\n` +
      `Link: https://localhost:${PORT}`
    );
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });
