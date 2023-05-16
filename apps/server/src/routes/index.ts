import { Router } from 'express';
import wakeTimeRouter from './wakeTime.route';
import weekDayRouter from './weekDay.route';
import { setAlarm, stopAlarm } from '../controllers/alarm.controller';
import response from '../util/response';

const router = Router();

router.use('/waketime', wakeTimeRouter);
router.use('/weekday', weekDayRouter);

router.post('/setalarm', response(setAlarm));
router.post('/stopalarm', response(stopAlarm));

export default router;
