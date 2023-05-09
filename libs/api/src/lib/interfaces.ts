import { ApiError } from '@iot-alarm-app/errors';
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

export type GetWakeTimes = Controller<
  (WakeTime & {
    days: WeekDay[];
  })[]
>;
export type GetWakeTime = Controller<
  WakeTime & {
    days: WeekDay[];
  }
>;
export type CreateWakeTime = Controller<
  WakeTime & {
    days: WeekDay[];
  }
>;
export type UpdateWakeTime = Controller<
  WakeTime & {
    days: WeekDay[];
  }
>;
export type DeleteWakeTime = Controller<WakeTime>;

export type SetAlarm = Controller<SleepSchedule>;
