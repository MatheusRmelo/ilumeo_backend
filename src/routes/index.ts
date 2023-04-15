import { Router } from 'express';
import usersRouter from './users';
import registersRoutes from './registers';

const router = Router();
router.use('/users', usersRouter);
router.use('/registers', registersRoutes);


export default router;