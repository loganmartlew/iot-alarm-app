import { GetSleepSchedule } from '@iot-alarm-app/api';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../../../config/axios';
import fetchFromApi from '../../../util/fetchFromApi';

export const alarmsKey = ['alarms'];

export const getRestPeriod = (id: string) => {
  return fetchFromApi<GetSleepSchedule>(axios.get(`/sleepschedule/${id}`));
};

export const useRestPeriod = (id: string) => {
  return useQuery(alarmsKey, () => getRestPeriod(id));
};
