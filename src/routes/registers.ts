import { Router } from "express";
import RegisterController from "../controllers/registerController";
import JWTMiddleware from "../middleware/jwtMiddleware";

const router = Router();

router.post("/", JWTMiddleware.validJWT, RegisterController.create);
router.get("/", JWTMiddleware.validJWT, RegisterController.getByCode);

export default router;
