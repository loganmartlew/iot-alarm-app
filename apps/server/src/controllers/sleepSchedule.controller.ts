import {
  GetCompletedSleepSchedules,
  GetSleepSchedule,
  GetSleepSchedules,
} from '@iot-alarm-app/api';
import { StatusCodes } from 'http-status-codes';
import SleepScheduleService from '../services/sleepSchedule.service';

export const getSleepSchedules: GetSleepSchedules = async () => {
  const sleepSchedules = await SleepScheduleService.getAll();

  return {
    status: StatusCodes.OK,
    message: 'Get all sleep schedules',
    data: sleepSchedules,
  };
};

export const getSleepSchedule: GetSleepSchedule = async (req) => {
  const sleepScheduleId = req.params.id;

  const sleepSchedule = await SleepScheduleService.getOne(sleepScheduleId);

  return {
    status: StatusCodes.OK,
    message: 'Get sleep schedule',
    data: sleepSchedule,
  };
};

export const getCompletedSleepSchedules: GetCompletedSleepSchedules =
  async () => {
    const sleepSchedules = await SleepScheduleService.getCompleted();

    return {
      status: StatusCodes.OK,
      message: 'Get completed sleep schedules',
      data: sleepSchedules,
    };
  };
