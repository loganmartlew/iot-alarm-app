import { dateTimeToDayjs, timeToDayjs } from '@iot-alarm-app/dates';
import { z } from 'zod';

export const wakeTimeDataSchema = z.object({
  time: z.string().refine((val) => {
    return timeToDayjs(val).isValid();
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
    return dateTimeToDayjs(val).isValid();
  }, 'String is not a valid date'),
});

export const sleepScheduleDataSchema = z
  .object({
    sleepTime: z.string().refine((val) => {
      return dateTimeToDayjs(val).isValid();
    }, 'String is not a valid date'),
    wakeTime: z.string().refine((val) => {
      return dateTimeToDayjs(val).isValid();
    }, 'String is not a valid date'),
    optimalWakeTime: z.string().refine((val) => {
      return dateTimeToDayjs(val).isValid();
    }, 'String is not a valid date'),
  })
  .refine((schema) => {
    return (
      dateTimeToDayjs(schema.sleepTime).isBefore(
        dateTimeToDayjs(schema.optimalWakeTime)
      ) &&
      dateTimeToDayjs(schema.optimalWakeTime).isBefore(
        dateTimeToDayjs(schema.wakeTime)
      )
    );
  });
