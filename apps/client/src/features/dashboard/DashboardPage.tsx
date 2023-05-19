import { Button, Stack } from '@mantine/core';
import { FC, useState } from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { Link } from 'react-router-dom';
import AverageAlarmStops from '../reporting/reportCards/AverageAlarmStops';
import AverageSleepDuration from '../reporting/reportCards/AverageSleepDuration';
import AverageSleepTime from '../reporting/reportCards/AverageSleepTime';
import LastAlarmStops from '../reporting/reportCards/LastAlarmStops';
import LastSleepDuration from '../reporting/reportCards/LastSleepDuration';
import LastSleepTime from '../reporting/reportCards/LastSleepTime';
import Recommendations from '../reporting/reportCards/Recommendations';
import RecommendedSleepTime from '../reporting/reportCards/RecommendedSleepTime';
import ReportingSection from '../reporting/ReportingSection';

const DashboardPage: FC = () => {
  const [lastRestPeriodId, setLastRestPeriodId] = useState<string>('');

  const viewRestPeriodButton = lastRestPeriodId ? (
    <Button
      component={Link}
      to={`/restperiods/${lastRestPeriodId}`}
      leftIcon={<MdOpenInNew />}
    >
      View Details
    </Button>
  ) : null;

  return (
    <Stack spacing="xl">
      <ReportingSection title="Recommendations">
        <RecommendedSleepTime />
        <Recommendations />
      </ReportingSection>
      <ReportingSection title="Averages">
        <AverageSleepTime />
        <AverageSleepDuration />
        <AverageAlarmStops />
      </ReportingSection>
      <ReportingSection
        title="Last Rest Period"
        rightSection={viewRestPeriodButton}
      >
        <LastSleepTime setSleepScheduleId={setLastRestPeriodId} />
        <LastSleepDuration />
        <LastAlarmStops />
      </ReportingSection>
    </Stack>
  );
};

export default DashboardPage;
