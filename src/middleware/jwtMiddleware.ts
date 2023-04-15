import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export default class JWTMiddleware {
    public static validJWT(req: Request, res: Response, next: NextFunction){
        const token = req.headers["authorization"];
        if(!token){
            res.status(401).send({message: 'Token inválido'});
            return;
        }
        jwt.verify(token.split(" ")[1], process.env.SECRET!, (err, payload)=>{
            if (err) {
                res.status(401).send({message: 'Token inválido'});
                return;
            }
            //@ts-ignore
            req.user = payload.user;
            next();
        });
    }   
}