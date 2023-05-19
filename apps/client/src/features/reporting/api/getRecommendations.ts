import { ReportingRecommendations } from '@iot-alarm-app/api';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../../../config/axios';
import fetchFromApi from '../../../util/fetchFromApi';

export const recommendationsKey = ['recommendations'];

export const getRecommendations = () => {
  return fetchFromApi<ReportingRecommendations>(
    axios.get('/reporting/recommendations')
  );
};

export const useRecommendations = () => {
  return useQuery(recommendationsKey, getRecommendations);
};
