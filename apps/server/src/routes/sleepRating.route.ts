import { Router } from 'express';
import response from '../util/response';
import { createSleepRating } from '../controllers/sleepRating.controller';

const router = Router();

router.post('/', response(createSleepRating));

export default router;
