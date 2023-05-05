import dayjs = require('dayjs');
import { z } from 'zod';

export const wakeTimeDataSchema = z.object({
  time: z.string().refine((val) => {
    dayjs.utc(val).isValid();
  }, 'String is not a valid date'),
  days: z.array(
    z.enum([
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ])
  ),
});

export const alarmSetSchema = z.object({
  timeTriggered: z.string().refine((val) => {
    dayjs.utc(val).isValid();
  }),
});

export const sleepScheduleDataSchema = z
  .object({
    sleepTime: z.string().refine((val) => {
      dayjs.utc(val).isValid();
    }, 'String is not a valid date'),
    wakeTime: z.string().refine((val) => {
      dayjs.utc(val).isValid();
    }, 'String is not a valid date'),
    optimalWakeTime: z.string().refine((val) => {
      dayjs.utc(val).isValid();
    }, 'String is not a valid date'),
  })
  .refine((schema) => {
    return (
      dayjs.utc(schema.sleepTime).isBefore(dayjs.utc(schema.optimalWakeTime)) &&
      dayjs.utc(schema.optimalWakeTime).isBefore(dayjs.utc(schema.wakeTime))
    );
  });
