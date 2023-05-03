import {
  alarmSetSchema,
  sleepScheduleDataSchema,
  wakeTimeDataSchema,
} from '@iot-alarm-app/validation';
import { z } from 'zod';

export type WakeTimeDTO = z.infer<typeof wakeTimeDataSchema>;
export type AlarmSetDTO = z.infer<typeof alarmSetSchema>;
export type SleepScheduleDTO = z.infer<typeof sleepScheduleDataSchema>;
