import { GetSleepSchedule } from '@iot-alarm-app/api';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../../../config/axios';
import fetchFromApi from '../../../util/fetchFromApi';
import { restPeriodKey } from './getRestPeriods';

export const getRestPeriod = (id: string) => {
  return fetchFromApi<GetSleepSchedule>(axios.get(`/sleepschedule/${id}`));
};

export const useRestPeriod = (id: string) => {
  return useQuery([...restPeriodKey, id], () => getRestPeriod(id));
};
