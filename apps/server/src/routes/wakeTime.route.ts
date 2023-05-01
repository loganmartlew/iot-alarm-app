import { Router } from 'express';
import response from '../util/response';
import { getWakeTimes } from '../controllers/wakeTime.controller';

const router = Router();

router.get('/', response(getWakeTimes));

export default router;
