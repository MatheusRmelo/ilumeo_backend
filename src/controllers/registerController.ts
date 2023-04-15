import { Request, Response } from "express";
import IResponseError from "../interfaces/IResponseError";
import { Register } from "../models/register";
import { Op } from "sequelize";
import IStartAndEndOfDay from "../interfaces/IStartAndEndOfDay";

export default class RegisterController {
  public static async getByCode(req: Request, res: Response) {
    var registers = await Register.findAll({
      order: [
        ['register_at', 'DESC'],
      ],
      where: { usercode: (req as any).user.code },
    });
    res.json({ data: registers });
  }

  public static async create(req: Request, res: Response) {
    let status = req.body.status;
    if (!status) {
      res.status(400).json({
        message: "Campos incompletos",
        errors: [
          { code: "status", message: "status é uma informação obrigatória" },
        ],
      } as IResponseError);
      return;
    }
    if (status !== "entry" && status !== "leave") {
      res.status(400).json({
        message: "Campos inválidos",
        errors: [
          { code: "status", message: "status precisa ser de entrada ou saída" },
        ],
      } as IResponseError);
      return;
    }

    try {
      let datesOfDay = RegisterController.getStartAndEndOfDay();
      var lastRegister = await Register.findOne({
        order: [
          ['register_at', 'DESC'],
        ],
        where: {
          usercode: (req as any).user.code,
          register_at: {[Op.between] : [datesOfDay.start, datesOfDay.end]}
        }});
      if(lastRegister && lastRegister?.get().status == status){
        res.status(403).json({
          message: "Campos inválidos",
          errors: [
            { code: "status", message: `o último status salvo já foi de ${status == 'entry' ? 'Entrada' : 'Saída'}` },
          ],
        } as IResponseError);
        return;
      }
      if(lastRegister == null && status !== 'entry'){
        res.status(403).json({
          message: "Campos inválidos",
          errors: [
            { code: "status", message: `o primero registro de status precisa ser de entrada` },
          ],
        } as IResponseError);
        return;
      }
      var register = await Register.create({
        usercode: (req as any).user.code,
        status,
        register_at: new Date(),
      });
      res.status(201).json(register);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  private static getStartAndEndOfDay() : IStartAndEndOfDay{
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    return {
      start: startOfDay,
      end: endOfDay
    } 
  }
}
