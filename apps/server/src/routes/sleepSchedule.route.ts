import { Router } from 'express';
import response from '../util/response';
import {
  getSleepSchedules,
  getSleepSchedule,
  getCompletedSleepSchedules,
} from '../controllers/sleepSchedule.controller';

const router = Router();

router.get('/', response(getSleepSchedules));
router.get('/completed', response(getCompletedSleepSchedules));
router.get('/:id', response(getSleepSchedule));

export default router;
