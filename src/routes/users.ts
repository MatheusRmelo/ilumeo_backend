import { Router, Request, Response } from 'express';
import IResponseError from '../interfaces/IResponseError';
import userController from '../controllers/userController';

const router = Router();

router.get('/:id', userController.getByPk);
router.post('/', userController.create);

export default router;