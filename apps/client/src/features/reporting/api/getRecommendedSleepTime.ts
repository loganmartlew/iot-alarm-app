import { ReportingRecommendedSleepTime } from '@iot-alarm-app/api';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../../../config/axios';
import fetchFromApi from '../../../util/fetchFromApi';

export const recommendedSleepTimeKey = ['recommendedsleeptime'];

export const getRecommendedSleepTime = () => {
  return fetchFromApi<ReportingRecommendedSleepTime>(
    axios.get('/reporting/recommendedsleeptime')
  );
};

export const useRecommendedSleepTime = () => {
  return useQuery(recommendedSleepTimeKey, getRecommendedSleepTime);
};
