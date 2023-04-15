import { Router } from "express";
import registerController from "../controllers/registerController";
import JWTMiddleware from "../middleware/jwtMiddleware";

const router = Router();

router.post("/", JWTMiddleware.validJWT, registerController.create);
router.get("/", JWTMiddleware.validJWT, registerController.getByCode);

export default router;
