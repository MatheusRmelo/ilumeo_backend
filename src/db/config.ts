import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user";
import dotenv from "dotenv";
import { Register } from "../models/register";
dotenv.config();

const connection = new Sequelize({
  dialect: "postgres",
  host: process.env.PSQL_HOST || "localhost",
  username: process.env.POSTGRES_USER as string,
  password: process.env.POSTGRES_PASSWORD as string,
  database: process.env.POSTGRES_DB as string,
  logging: false,
  models: [User, Register],
});

export default connection;
