import { axios } from '../../../config/axios';
import { CreateWakeTime, WakeTimeDTO } from '@iot-alarm-app/api';
import fetchFromApi from '../../../util/fetchFromApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { alarmsKey } from './getAlarms';
import { WakeTimeAlarm } from '@iot-alarm-app/types';
import { v4 as uuid } from 'uuid';

export const createAlarm = (wakeTimeDto: WakeTimeDTO) => {
  return fetchFromApi<CreateWakeTime>(axios.post('/waketime', wakeTimeDto));
};

export const useCreateAlarm = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(createAlarm, {
    onMutate: async (newWakeTime) => {
      await queryClient.cancelQueries(alarmsKey);

      const previousWakeTimes = queryClient.getQueryData(alarmsKey);

      const newAlarm: WakeTimeAlarm = {
        id: uuid(),
        createdAt: new Date(),
        updatedAt: new Date(),
        time: newWakeTime.time,
        days: newWakeTime.days.map((day) => ({
          id: uuid(),
          createdAt: new Date(),
          updatedAt: new Date(),
          name: day.charAt(0).toUpperCase() + day.slice(1),
          systemName: day,
          sequence: 0,
        })),
      };

      queryClient.setQueryData(
        alarmsKey,
        (old: WakeTimeAlarm[] | undefined) => [...(old || []), newAlarm]
      );

      return { previousWakeTimes };
    },
    onError: (err, newWakeTime, context) => {
      queryClient.setQueryData(alarmsKey, context?.previousWakeTimes);
      console.log(err);
    },
    onSettled: () => {
      queryClient.invalidateQueries(alarmsKey);
    },
  });

  return mutation;
};
