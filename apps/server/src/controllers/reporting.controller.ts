import {
  ReportingAverageAlarmStops,
  ReportingAverageSleepDuration,
  ReportingAverageSleepTime,
  ReportingLastAlarmStops,
  ReportingLastSleepDuration,
  ReportingLastSleepSchedule,
  ReportingRecommendations,
  ReportingRecommendedSleepTime,
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

export const getLastSleepSchedule: ReportingLastSleepSchedule = async () => {
  const lastSleepSchedule = await ReportingService.lastSleepSchedule();

  return {
    status: StatusCodes.OK,
    message: 'Last sleep schedule',
    data: lastSleepSchedule,
  };
};

export const getLastSleepDuration: ReportingLastSleepDuration = async () => {
  const lastSleepDuration = await ReportingService.lastSleepDuration();

  return {
    status: StatusCodes.OK,
    message: 'Last sleep duration',
    data: lastSleepDuration,
  };
};

export const getLastAlarmStops: ReportingLastAlarmStops = async () => {
  const lastAlarmStops = await ReportingService.lastAlarmStops();

  return {
    status: StatusCodes.OK,
    message: 'Last alarm stops',
    data: lastAlarmStops,
  };
};

export const getRecommendedSleepTime: ReportingRecommendedSleepTime =
  async () => {
    const recommendedSleepTime = await ReportingService.recommendedSleepTime();

    return {
      status: StatusCodes.OK,
      message: 'Recommended sleep time',
      data: recommendedSleepTime,
    };
  };

export const getRecommendations: ReportingRecommendations = async () => {
  const recommendations = await ReportingService.recommendations();

  return {
    status: StatusCodes.OK,
    message: 'Recommendations',
    data: recommendations,
  };
};
