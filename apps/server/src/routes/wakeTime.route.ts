import { Router } from 'express';
import response from '../util/response';
import {
  createWakeTime,
  getWakeTime,
  getWakeTimes,
  updateWakeTime,
} from '../controllers/wakeTime.controller';

const router = Router();

router.get('/', response(getWakeTimes));
router.get('/:id', response(getWakeTime));
router.post('/', response(createWakeTime));
router.put('/:id', response(updateWakeTime));

export default router;
