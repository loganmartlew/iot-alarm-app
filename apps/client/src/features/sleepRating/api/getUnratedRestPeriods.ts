import { GetUnratedSleepSchedules } from '@iot-alarm-app/api';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../../../config/axios';
import fetchFromApi from '../../../util/fetchFromApi';

export const unratedRestPeriodKey = ['unratedrestperiod'];

export const getUnratedRestPeriods = () => {
  return fetchFromApi<GetUnratedSleepSchedules>(
    axios.get('/sleepschedule/unrated')
  );
};

export const useUnratedRestPeriods = () => {
  return useQuery(unratedRestPeriodKey, getUnratedRestPeriods);
};
