/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC } from 'react';
import PageWrapper from '../../components/PageWrapper';
import { useUnratedRestPeriods } from './api/getUnratedRestPeriods';
import UnratedPeriodList from './UnratedPeriodList';

const SleepRatingPage: FC = () => {
  const unratedRestPeriodData = useUnratedRestPeriods();

  return (
    <PageWrapper title="Unrated Rest Periods" data={unratedRestPeriodData}>
      <UnratedPeriodList unratedRestPeriods={unratedRestPeriodData.data!} />
    </PageWrapper>
  );
};

export default SleepRatingPage;
