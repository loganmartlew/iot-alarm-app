import {
  AlarmStop,
  SleepRating,
  SleepSchedule,
  WakeTime,
  WeekDay,
} from '@prisma/client';

export type WakeTimeAlarm = WakeTime & {
  days: WeekDay[];
};

export type SleepScheduleStops = SleepSchedule & {
  alarmStops: AlarmStop[];
  sleepRating: SleepRating | null;
};

export type Recommendation = {
  title: string;
  description: string;
};
