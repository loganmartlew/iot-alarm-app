import { Router } from 'express';
import wakeTimeRouter from './wakeTime.route';
import weekDayRouter from './weekDay.route';
import sleepScheduleRouter from './sleepSchedule.route';
import reportingRouter from './reporting.route';
import sleepRatingRouter from './sleepRating.route';
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
router.use('/reporting', reportingRouter);
router.use('/sleeprating', sleepRatingRouter);

router.post('/setalarm', response(setAlarm));
router.post('/stopalarm', response(stopAlarm));
router.post('/cancelalarm', response(cancelAlarm));

export default router;
