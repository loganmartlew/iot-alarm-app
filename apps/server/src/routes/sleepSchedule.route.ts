import { Router } from 'express';
import response from '../util/response';
import {
  getSleepSchedules,
  getSleepSchedule,
  getCompletedSleepSchedules,
  getUnratedSleepSchedules,
} from '../controllers/sleepSchedule.controller';

const router = Router();

router.get('/', response(getSleepSchedules));
router.get('/completed', response(getCompletedSleepSchedules));
router.get('/unrated', response(getUnratedSleepSchedules));
router.get('/:id', response(getSleepSchedule));

export default router;
