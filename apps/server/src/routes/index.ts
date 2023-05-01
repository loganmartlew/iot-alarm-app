import { Router } from 'express';
import wakeTimeRouter from './wakeTime.route';

const router = Router();

router.use('/waketime', wakeTimeRouter);

export default router;
