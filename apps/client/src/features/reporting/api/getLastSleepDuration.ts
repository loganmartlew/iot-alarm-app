import { ReportingLastSleepDuration } from '@iot-alarm-app/api';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../../../config/axios';
import fetchFromApi from '../../../util/fetchFromApi';

export const lastSleepDuration = ['lastsleepduration'];

export const getLastSleepDuration = () => {
  return fetchFromApi<ReportingLastSleepDuration>(
    axios.get('/reporting/lastsleepduration')
  );
};

export const useLastSleepDuration = () => {
  return useQuery(lastSleepDuration, getLastSleepDuration);
};
