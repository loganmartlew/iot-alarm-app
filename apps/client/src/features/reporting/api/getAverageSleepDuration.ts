import { ReportingAverageSleepDuration } from '@iot-alarm-app/api';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../../../config/axios';
import fetchFromApi from '../../../util/fetchFromApi';

export const averageSleepDurationKey = ['averagesleepduration'];

export const getAverageSleepDuration = () => {
  return fetchFromApi<ReportingAverageSleepDuration>(
    axios.get('/reporting/averagesleepduration')
  );
};

export const useAverageSleepDuration = () => {
  return useQuery(averageSleepDurationKey, getAverageSleepDuration);
};
