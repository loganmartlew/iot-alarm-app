import { CreateWakeTime, GetWakeTimes } from '@iot-alarm-app/api';
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

export const createWakeTime: CreateWakeTime = async (req, res) => {
  const newWakeTime = await WakeTimeService.create(req.body);

  return {
    status: StatusCodes.CREATED,
    message: 'Create wake time',
    data: newWakeTime,
  };
};
