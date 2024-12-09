import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connect from "./config/db.js";
import menuRoute from "./routes/menuRoute.js";

dotenv.config();

connect();

const app = express();
const Port = process.env.PORT || 3000

app.use(express.json());

app.use("/api/menu", menuRoute)

app.get("/", (req, res) => {
  res.send("Hello Worlddzzzzz!");
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});