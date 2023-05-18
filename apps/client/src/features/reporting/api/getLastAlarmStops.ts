import { ReportingLastAlarmStops } from '@iot-alarm-app/api';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../../../config/axios';
import fetchFromApi from '../../../util/fetchFromApi';

export const lastAlarmStops = ['lastalarmstops'];

export const getLastAlarmStops = () => {
  return fetchFromApi<ReportingLastAlarmStops>(
    axios.get('/reporting/lastalarmstops')
  );
};

export const useLastAlarmStops = () => {
  return useQuery(lastAlarmStops, getLastAlarmStops);
};
