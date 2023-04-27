import { Router } from 'express';
import wakeuptimeRouter from './wakeuptime';

const router = Router();

router.use('/wakeuptime', wakeuptimeRouter);

export default router;
