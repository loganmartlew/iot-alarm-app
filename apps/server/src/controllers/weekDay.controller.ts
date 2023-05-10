import { GetWeekDays } from '@iot-alarm-app/api';
import WeekDayService from '../services/weekDay.service';
import { StatusCodes } from 'http-status-codes';

export const getWeekDays: GetWeekDays = async () => {
  const wakeTimes = await WeekDayService.getAll();

  return {
    status: StatusCodes.OK,
    message: 'Get all week days',
    data: wakeTimes,
  };
};
