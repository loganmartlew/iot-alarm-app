import { GetWakeTimes } from '@iot-alarm-app/api';
import WakeTimeService from '../services/wakeTime.service';
import { StatusCodes } from 'http-status-codes';

export const getWakeTimes: GetWakeTimes = async (req, res) => {
  const wakeTimes = await WakeTimeService.getAll();

  return {
    status: StatusCodes.OK,
    message: 'Get all wake times',
    data: wakeTimes,
  };
};
