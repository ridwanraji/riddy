import express from "express";
import dotenv from "dotenv";
import app from "./app";

// const app = express();
const port = 8000;
dotenv.config();

// app.get("/", (req, res) => {
//   res.send("🎉 Hello World. Wecome 🎉");
// });

app.listen(port, async () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
