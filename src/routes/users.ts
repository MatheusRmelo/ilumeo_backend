import { Router } from "express";
import UserController from "../controllers/userController";

const router = Router();

router.get("/:id", UserController.getByPk);
router.post("/", UserController.create);

export default router;
