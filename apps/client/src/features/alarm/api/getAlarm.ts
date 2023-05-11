import { GetWakeTime } from '@iot-alarm-app/api';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../../../config/axios';
import fetchFromApi from '../../../util/fetchFromApi';
import { alarmsKey } from './getAlarms';

export const getAlarm = (id: string) => {
  return fetchFromApi<GetWakeTime>(axios.get(`/waketime/${id}`));
};

export const useAlarm = (id: string) => {
  return useQuery([...alarmsKey, id], () => getAlarm(id));
};
