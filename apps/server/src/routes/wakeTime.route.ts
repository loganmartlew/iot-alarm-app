import { Router } from 'express';
import response from '../util/response';
import {
  createWakeTime,
  deleteWakeTime,
  getWakeTime,
  getWakeTimes,
  updateWakeTime,
} from '../controllers/wakeTime.controller';

const router = Router();

router.get('/', response(getWakeTimes));
router.get('/:id', response(getWakeTime));
router.post('/', response(createWakeTime));
router.put('/:id', response(updateWakeTime));
router.delete('/:id', response(deleteWakeTime));

export default router;
