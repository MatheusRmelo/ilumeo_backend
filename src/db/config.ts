import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user";
import dotenv from "dotenv";
import { Register } from "../models/register";
dotenv.config();

const connection = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  logging: false,
  models: [User, Register],
});

export default connection;
