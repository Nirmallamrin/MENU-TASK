import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connect from "./config/db.js";

dotenv.config();

connect();

const app = express();
const Port = process.env.PORT || 3000

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Worlddzzzzz!");
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});