import { axios } from '../../../config/axios';
import { DeleteWakeTime } from '@iot-alarm-app/api';
import fetchFromApi from '../../../util/fetchFromApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { alarmsKey } from './getAlarms';
import { WakeTimeAlarm } from '@iot-alarm-app/types';

export const deleteAlarm = (id: string) => {
  return fetchFromApi<DeleteWakeTime>(axios.delete(`/waketime/${id}`));
};

export const useDeleteAlarm = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteAlarm, {
    onMutate: async (id) => {
      await queryClient.cancelQueries(alarmsKey);

      const previousWakeTimes = queryClient.getQueryData(alarmsKey);

      queryClient.setQueryData(
        alarmsKey,
        (old: WakeTimeAlarm[] | undefined) => [
          ...(old?.filter((alarm) => alarm.id !== id) || []),
        ]
      );

      return { previousWakeTimes };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(alarmsKey, context?.previousWakeTimes);
      console.log(err);
    },
    onSettled: () => {
      queryClient.invalidateQueries(alarmsKey);
    },
  });

  return mutation;
};
