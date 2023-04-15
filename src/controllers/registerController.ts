import { Request, Response } from "express";
import IResponseError from "../interfaces/IResponseError";
import { Register } from "../models/register";


export default class registerController {

    public static async getByCode(req: Request, res: Response){
        var registers = await Register.findAll({where: {usercode: (req as any).user.code}});
        res.json({'data': registers});
    }

    public static async create(req: Request, res: Response){
        let status = req.body.status;
        if(!status){
            res.status(400).json({
                'message': 'Campos incompletos',
                'errors': [
                    {code: 'status', message: 'status é uma informação obrigatória'}
                ]
            } as IResponseError);
            return;
        }
        if(status !== 'entry' && status !== 'leave'){
            res.status(400).json({
                'message': 'Campos inválidos',
                'errors': [
                    {code: 'status', message: 'status precisa ser de entrada ou saída'}
                ]
            } as IResponseError);
            return;
        }

        try {
            var register = await Register.create({
                usercode: (req as any).user.code,
                status,
                register_at: new Date()
            });
            res.status(201).json(register);
        }catch(err){
            res.status(500).json(err);
        }
    }
}