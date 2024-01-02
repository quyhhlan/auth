import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import authRouter from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); // parses incoming requests with JSON payloads and is based on body-parser. for example to catch req.body.name POST req
app.use(morgan("dev")); // since it's only a logger so we can also use "dev" in production to log our requests.

app.get("/api", (req, res, next) => {
  res.json("home page");
});

app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
