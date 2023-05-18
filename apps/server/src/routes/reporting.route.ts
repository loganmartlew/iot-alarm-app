import { Router } from 'express';
import response from '../util/response';
import {
  getAverageAlarmStops,
  getAverageSleepDuration,
  getAverageSleepTime,
  getLastAlarmStops,
  getLastSleepDuration,
  getLastSleepSchedule,
  getRecommendations,
  getRecommendedSleepTime,
} from '../controllers/reporting.controller';

const router = Router();

router.get('/recommendedsleeptime', response(getRecommendedSleepTime));
router.get('/recommendations', response(getRecommendations));

router.get('/averagesleeptime', response(getAverageSleepTime));
router.get('/averagesleepduration', response(getAverageSleepDuration));
router.get('/averagealarmstops', response(getAverageAlarmStops));

router.get('/lastsleepschedule', response(getLastSleepSchedule));
router.get('/lastsleepduration', response(getLastSleepDuration));
router.get('/lastalarmstops', response(getLastAlarmStops));

export default router;
