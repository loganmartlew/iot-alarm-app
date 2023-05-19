import { CreateSleepRating, SleepRatingDTO } from '@iot-alarm-app/api';
import { SleepSchedule } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axios } from '../../../config/axios';
import fetchFromApi from '../../../util/fetchFromApi';
import { unratedRestPeriodKey } from './getUnratedRestPeriods';

export const createSleepRating = (sleepRatingDto: SleepRatingDTO) => {
  return fetchFromApi<CreateSleepRating>(
    axios.post('/sleeprating', sleepRatingDto)
  );
};

export const useCreateSleepRating = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(createSleepRating, {
    onMutate: async (newSleepRating) => {
      await queryClient.cancelQueries(unratedRestPeriodKey);

      const previousSleepRatings =
        queryClient.getQueryData(unratedRestPeriodKey);

      queryClient.setQueryData(
        unratedRestPeriodKey,
        (old: SleepSchedule[] | undefined) => [
          ...(old?.filter(
            (sleepSchedule) =>
              sleepSchedule.id !== newSleepRating.sleepScheduleId
          ) || []),
        ]
      );

      return { previousSleepRatings };
    },
    onError: (err, newSleepRating, context) => {
      queryClient.setQueryData(
        unratedRestPeriodKey,
        context?.previousSleepRatings
      );
      console.log(err);
    },
    onSettled: () => {
      queryClient.invalidateQueries(unratedRestPeriodKey);
    },
  });

  return mutation;
};
