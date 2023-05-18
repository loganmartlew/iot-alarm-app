import { Router } from 'express';
import response from '../util/response';
import {
  getAverageAlarmStops,
  getAverageSleepDuration,
  getAverageSleepTime,
} from '../controllers/reporting.controller';

const router = Router();

router.get('/averagesleeptime', response(getAverageSleepTime));
router.get('/averagesleepduration', response(getAverageSleepDuration));
router.get('/averagealarmstops', response(getAverageAlarmStops));

export default router;
