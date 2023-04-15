import { Request, Response } from "express";
import IResponseError from "../interfaces/IResponseError";
import { User } from "../models/user";
import Utils from "../utils";
import jwt from "jsonwebtoken";

export default class UserController {
  public static async create(req: Request, res: Response) {
    let name = req.body.name;
    if (!name) {
      res.status(400).json({
        message: "Campos incompletos",
        errors: [
          { code: "name", message: "Nome é uma informação obrigatória" },
        ],
      } as IResponseError);
      return;
    }

    try {
      var user = await User.create({
        code: Utils.makeUsercode(7),
        name,
      });
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  public static async getByPk(req: Request, res: Response) {
    let code: string = req.params.id;
    if (!code) {
      res.status(400).json({
        message: "Campos incompletos",
        errors: [
          { code: "code", message: "Código é uma informação obrigatória" },
        ],
      } as IResponseError);
      return;
    }
    try {
      var user = await User.findByPk(code);
      if (!user) {
        res.status(404).json({
          message: "Usuário não encontrado",
          errors: [],
        } as IResponseError);
        return;
      }
      const token = jwt.sign({ user }, process.env.SECRET!, {
        expiresIn: "2 days",
      });
      res.json({ auth: true, token: token });
    } catch (err) {
      res.status(500).json({ message: err!.toString() });
    }
  }
}
