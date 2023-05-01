import { ApiError } from '@iot-alarm-app/errors';
import { WakeTime, WeekDay } from '@prisma/client';
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
