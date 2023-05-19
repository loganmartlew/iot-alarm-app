/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { sleepRatingSchema } from '@iot-alarm-app/validation';
import { FC } from 'react';
import PageWrapper from '../../components/PageWrapper';
import { useCreateSleepRating } from './api/createSleepRating';
import { useUnratedRestPeriods } from './api/getUnratedRestPeriods';
import UnratedPeriodList from './UnratedPeriodList';

const SleepRatingPage: FC = () => {
  const unratedRestPeriodData = useUnratedRestPeriods();

  const ratingsMutation = useCreateSleepRating();

  const onSubmitRating = (rating: number, sleepScheduleId: string) => {
    const sleepRatingDto = sleepRatingSchema.parse({ rating, sleepScheduleId });
    ratingsMutation.mutate(sleepRatingDto);
  };

  return (
    <PageWrapper title="Unrated Rest Periods" data={unratedRestPeriodData}>
      <UnratedPeriodList
        unratedRestPeriods={unratedRestPeriodData.data!}
        onSubmit={onSubmitRating}
      />
    </PageWrapper>
  );
};

export default SleepRatingPage;
