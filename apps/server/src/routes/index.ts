import { Router } from 'express';
import wakeTimeRouter from './wakeTime.route';
import weekDayRouter from './weekDay.route';
import sleepScheduleRouter from './sleepSchedule.route';
import {
  cancelAlarm,
  setAlarm,
  stopAlarm,
} from '../controllers/alarm.controller';
import response from '../util/response';

const router = Router();

router.use('/waketime', wakeTimeRouter);
router.use('/weekday', weekDayRouter);
router.use('/sleepschedule', sleepScheduleRouter);

router.post('/setalarm', response(setAlarm));
router.post('/stopalarm', response(stopAlarm));
router.post('/cancelalarm', response(cancelAlarm));

export default router;
