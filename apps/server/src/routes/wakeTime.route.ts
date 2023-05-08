import { Router } from 'express';
import response from '../util/response';
import {
  createWakeTime,
  getWakeTime,
  getWakeTimes,
} from '../controllers/wakeTime.controller';

const router = Router();

router.get('/', response(getWakeTimes));
router.get('/:id', response(getWakeTime));
router.post('/', response(createWakeTime));

export default router;
