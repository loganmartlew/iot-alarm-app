import {
  ReportingAverageAlarmStops,
  ReportingAverageSleepDuration,
  ReportingAverageSleepTime,
} from '@iot-alarm-app/api';
import { StatusCodes } from 'http-status-codes';
import ReportingService from '../services/reporting.service';

export const getAverageSleepTime: ReportingAverageSleepTime = async () => {
  const averageSleepTime = await ReportingService.averageSleepTime();

  return {
    status: StatusCodes.OK,
    message: 'Average sleep time',
    data: averageSleepTime,
  };
};

export const getAverageSleepDuration: ReportingAverageSleepDuration =
  async () => {
    const averageSleepDuration = await ReportingService.averageSleepDuration();

    return {
      status: StatusCodes.OK,
      message: 'Average sleep time',
      data: averageSleepDuration,
    };
  };

export const getAverageAlarmStops: ReportingAverageAlarmStops = async () => {
  const averageAlarmStops = await ReportingService.averageAlarmStops();

  return {
    status: StatusCodes.OK,
    message: 'Average sleep time',
    data: averageAlarmStops,
  };
};
