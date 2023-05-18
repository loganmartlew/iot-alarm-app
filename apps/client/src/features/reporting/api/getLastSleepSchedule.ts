import { ReportingLastSleepSchedule } from '@iot-alarm-app/api';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../../../config/axios';
import fetchFromApi from '../../../util/fetchFromApi';

export const lastSleepSchedule = ['lastsleepschedule'];

export const getLastSleepSchedule = () => {
  return fetchFromApi<ReportingLastSleepSchedule>(
    axios.get('/reporting/lastsleepschedule')
  );
};

export const useLastSleepSchedule = () => {
  return useQuery(lastSleepSchedule, getLastSleepSchedule);
};
