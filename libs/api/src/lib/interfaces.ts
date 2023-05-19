import { ApiError } from '@iot-alarm-app/errors';
import {
  Recommendation,
  SleepScheduleStops,
  WakeTimeAlarm,
} from '@iot-alarm-app/types';
import { SleepRating, SleepSchedule, WakeTime, WeekDay } from '@prisma/client';
import { Request, Response } from 'express';

export type ApiResponse<T> =
  | {
      status: number;
      message: string;
      data?: T;
      error?: never;
    }
  | {
      status: number;
      message: string;
      data?: never;
      error: ApiError;
    };

export type Controller<T> = (
  req: Request,
  res: Response
) => Promise<ApiResponse<T>>;
export type ExtractControllerData<T> = T extends Controller<infer U>
  ? U
  : never;

export type GetWakeTimes = Controller<WakeTimeAlarm[]>;
export type GetWakeTime = Controller<WakeTimeAlarm>;
export type CreateWakeTime = Controller<WakeTimeAlarm>;
export type UpdateWakeTime = Controller<WakeTimeAlarm>;
export type DeleteWakeTime = Controller<WakeTime>;

export type SetAlarm = Controller<SleepSchedule>;
export type StopAlarm = Controller<void>;
export type CancelAlarm = Controller<void>;

export type GetWeekDays = Controller<WeekDay[]>;

export type GetSleepSchedules = Controller<SleepSchedule[]>;
export type GetSleepSchedule = Controller<SleepScheduleStops>;
export type GetCompletedSleepSchedules = Controller<SleepSchedule[]>;
export type GetUnratedSleepSchedules = Controller<SleepSchedule[]>;

export type ReportingAverageSleepTime = Controller<string>;
export type ReportingAverageSleepDuration = Controller<string>;
export type ReportingAverageAlarmStops = Controller<number>;
export type ReportingLastSleepSchedule = Controller<SleepSchedule>;
export type ReportingLastSleepDuration = Controller<string>;
export type ReportingLastAlarmStops = Controller<number>;
export type ReportingRecommendedSleepTime = Controller<string>;
export type ReportingRecommendations = Controller<Recommendation[]>;

export type CreateSleepRating = Controller<SleepRating>;
