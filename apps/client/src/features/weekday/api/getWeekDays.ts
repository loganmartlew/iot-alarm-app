import { GetWeekDays } from '@iot-alarm-app/api';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../../../config/axios';
import fetchFromApi from '../../../util/fetchFromApi';

export const weekDaysKey = ['weekDays'];

export const getWeekDays = () => {
  return fetchFromApi<GetWeekDays>(axios.get('/weekday'));
};

export const useWeekDays = () => {
  return useQuery(weekDaysKey, getWeekDays);
};
