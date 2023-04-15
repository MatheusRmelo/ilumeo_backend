import express from "express";
import router from "./routes";
import connection from "./db/config";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3333;
app.use(cors());
app.use(express.json());
app.use(router);

connection
  .sync({ alter: process.env.NODE_ENV == "development" })
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });
app.listen(PORT, () => `Server running on port ${PORT}`);
