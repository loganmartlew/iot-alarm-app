import { Router } from 'express';
import wakeTimeRouter from './wakeTime.route';
import weekDayRouter from './weekDay.route';

const router = Router();

router.use('/waketime', wakeTimeRouter);
router.use('/weekday', weekDayRouter);

export default router;
