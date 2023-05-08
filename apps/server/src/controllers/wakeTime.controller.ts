import {
  CreateWakeTime,
  GetWakeTime,
  GetWakeTimes,
  UpdateWakeTime,
  WakeTimeDTO,
} from '@iot-alarm-app/api';
import WakeTimeService from '../services/wakeTime.service';
import { StatusCodes } from 'http-status-codes';
import { wakeTimeDataSchema } from '@iot-alarm-app/validation';

export const getWakeTimes: GetWakeTimes = async () => {
  const wakeTimes = await WakeTimeService.getAll();

  return {
    status: StatusCodes.OK,
    message: 'Get all wake times',
    data: wakeTimes,
  };
};

export const getWakeTime: GetWakeTime = async (req) => {
  const wakeTimeId = req.params.id;

  const wakeTime = await WakeTimeService.getOne(wakeTimeId);

  return {
    status: StatusCodes.OK,
    message: 'Get wake time',
    data: wakeTime,
  };
};

export const createWakeTime: CreateWakeTime = async (req) => {
  const wakeTimeDto: WakeTimeDTO = wakeTimeDataSchema.parse(req.body);

  const newWakeTime = await WakeTimeService.create(wakeTimeDto);

  return {
    status: StatusCodes.CREATED,
    message: 'Create wake time',
    data: newWakeTime,
  };
};

export const updateWakeTime: UpdateWakeTime = async (req) => {
  const wakeTimeId = req.params.id;
  const wakeTimeDto: WakeTimeDTO = wakeTimeDataSchema.parse(req.body);

  const updatedWakeTime = await WakeTimeService.update(wakeTimeId, wakeTimeDto);

  return {
    status: StatusCodes.OK,
    message: 'Update wake time',
    data: updatedWakeTime,
  };
};
