import { Router } from 'express';
import response from '../util/response';
import { getWeekDays } from '../controllers/weekDay.controller';

const router = Router();

router.get('/', response(getWeekDays));

export default router;
