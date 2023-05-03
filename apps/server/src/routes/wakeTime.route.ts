import { Router } from 'express';
import response from '../util/response';
import {
  createWakeTime,
  getWakeTimes,
} from '../controllers/wakeTime.controller';

const router = Router();

router.get('/', response(getWakeTimes));
router.post('/', response(createWakeTime));

export default router;
