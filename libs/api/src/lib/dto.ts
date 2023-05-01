import { wakeTimeDataSchema } from '@iot-alarm-app/validation';
import { z } from 'zod';

export type WakeTimeDTO = z.infer<typeof wakeTimeDataSchema>;
