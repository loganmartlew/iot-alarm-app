import dayjs = require('dayjs');
import { z } from 'zod';

export const wakeTimeDataSchema = z.object({
  time: z.string().refine((val) => {
    dayjs(val).isValid();
  }),
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
