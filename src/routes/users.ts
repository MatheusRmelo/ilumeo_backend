import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

router.get("/:id", userController.getByPk);
router.post("/", userController.create);

export default router;
