import { WakeTime, WeekDay } from '@prisma/client';

export type WakeTimeAlarm = WakeTime & {
  days: WeekDay[];
};
