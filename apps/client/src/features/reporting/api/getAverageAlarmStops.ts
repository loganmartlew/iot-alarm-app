import { ReportingAverageAlarmStops } from '@iot-alarm-app/api';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../../../config/axios';
import fetchFromApi from '../../../util/fetchFromApi';

export const averageAlarmStopsKey = ['averagealarmstops'];

export const getAverageAlarmStops = () => {
  return fetchFromApi<ReportingAverageAlarmStops>(
    axios.get('/reporting/averagealarmstops')
  );
};

export const useAverageAlarmStops = () => {
  return useQuery(averageAlarmStopsKey, getAverageAlarmStops);
};
