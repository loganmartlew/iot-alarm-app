import { Router } from 'express';
import wakeTimeRouter from './wakeTime.route';
import weekDayRouter from './weekDay.route';
import { setAlarm } from '../controllers/alarm.controller';
import response from '../util/response';

const router = Router();

router.use('/waketime', wakeTimeRouter);
router.use('/weekday', weekDayRouter);

router.post('/setalarm', response(setAlarm));

export default router;
