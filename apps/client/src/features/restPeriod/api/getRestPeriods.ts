import { GetCompletedSleepSchedules } from '@iot-alarm-app/api';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../../../config/axios';
import fetchFromApi from '../../../util/fetchFromApi';

export const restPeriodKey = ['restperiod'];

export const getRestPeriods = () => {
  return fetchFromApi<GetCompletedSleepSchedules>(
    axios.get('/sleepschedule/completed')
  );
};

export const useRestPeriods = () => {
  return useQuery(restPeriodKey, getRestPeriods);
};
