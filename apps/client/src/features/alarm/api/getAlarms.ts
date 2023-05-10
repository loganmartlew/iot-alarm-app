import { GetWakeTimes } from '@iot-alarm-app/api';
import { useQuery } from 'react-query';
import { axios } from '../../../config/axios';
import fetchFromApi from '../../../util/fetchFromApi';

export const alarmsKey = ['alarms'];

export const getAlarms = () => {
  return fetchFromApi<GetWakeTimes>(axios.get('/waketime'));
};

export const useAlarms = () => {
  return useQuery(alarmsKey, getAlarms);
};
