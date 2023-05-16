import { ApiError } from '@iot-alarm-app/errors';
import { WakeTimeAlarm } from '@iot-alarm-app/types';
import { SleepSchedule, WakeTime, WeekDay } from '@prisma/client';
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

export type GetWeekDays = Controller<WeekDay[]>;
