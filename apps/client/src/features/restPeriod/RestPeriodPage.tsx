/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC } from 'react';
import PageWrapper from '../../components/PageWrapper';
import { useRestPeriods } from './api/getRestPeriods';
import RestPeriodList from './RestPeriodList';

const RestPeriodPage: FC = () => {
  const restPeriodsData = useRestPeriods();

  return (
    <PageWrapper title="Rest Periods" data={restPeriodsData}>
      <RestPeriodList restPeriods={restPeriodsData.data!} />
    </PageWrapper>
  );
};

export default RestPeriodPage;
