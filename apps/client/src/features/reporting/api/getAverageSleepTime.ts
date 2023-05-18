import { ReportingAverageSleepTime } from '@iot-alarm-app/api';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../../../config/axios';
import fetchFromApi from '../../../util/fetchFromApi';

export const averageSleepTimeKey = ['averagesleeptime'];

export const getAverageSleepTime = () => {
  return fetchFromApi<ReportingAverageSleepTime>(
    axios.get('/reporting/averagesleeptime')
  );
};

export const useAverageSleepTime = () => {
  return useQuery(averageSleepTimeKey, getAverageSleepTime);
};
