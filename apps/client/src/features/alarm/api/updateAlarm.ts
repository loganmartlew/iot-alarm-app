import { axios } from '../../../config/axios';
import { UpdateWakeTime, WakeTimeDTO } from '@iot-alarm-app/api';
import fetchFromApi from '../../../util/fetchFromApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { alarmsKey } from './getAlarms';
import { WakeTimeAlarm } from '@iot-alarm-app/types';
import { v4 as uuid } from 'uuid';

export const updateAlarm = (id: string, wakeTimeDto: WakeTimeDTO) => {
  return fetchFromApi<UpdateWakeTime>(
    axios.put(`/waketime/${id}`, wakeTimeDto)
  );
};

export const useUpdateAlarm = (id: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (wakeTimeDto: WakeTimeDTO) => updateAlarm(id, wakeTimeDto),
    {
      onMutate: async (updatedWakeTime) => {
        await queryClient.cancelQueries(alarmsKey);

        const previousWakeTimes = queryClient.getQueryData(alarmsKey);
        const previousAlarm = queryClient.getQueryData([...alarmsKey, id]);

        const updatedAlarm: WakeTimeAlarm = {
          id,
          createdAt: new Date(),
          updatedAt: new Date(),
          time: updatedWakeTime.time,
          days: updatedWakeTime.days.map((day) => ({
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
          (old: WakeTimeAlarm[] | undefined) => [
            ...(old?.filter((alarm) => alarm.id !== id) || []),
            updatedAlarm,
          ]
        );

        queryClient.setQueryData([...alarmsKey, id], updatedAlarm);

        return { previousWakeTimes, previousAlarm };
      },
      onError: (err, updatedWakeTime, context) => {
        queryClient.setQueryData(alarmsKey, context?.previousWakeTimes);
        queryClient.setQueryData([...alarmsKey, id], context?.previousAlarm);
        console.log(err);
      },
      onSettled: () => {
        queryClient.invalidateQueries(alarmsKey);
        queryClient.invalidateQueries([...alarmsKey, id]);
      },
    }
  );

  return mutation;
};
