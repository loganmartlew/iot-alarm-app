import { Stack } from '@mantine/core';
import { FC } from 'react';
import AverageAlarmStops from '../reporting/reportCards/AverageAlarmStops';
import AverageSleepDuration from '../reporting/reportCards/AverageSleepDuration';
import AverageSleepTime from '../reporting/reportCards/AverageSleepTime';
import ReportingSection from '../reporting/ReportingSection';

const DashboardPage: FC = () => {
  return (
    <Stack>
      <ReportingSection title="Recommendations">No data...</ReportingSection>
      <ReportingSection title="Averages">
        <AverageSleepTime />
        <AverageSleepDuration />
        <AverageAlarmStops />
      </ReportingSection>
      <ReportingSection title="Last Rest Period">No data...</ReportingSection>
    </Stack>
  );
};

export default DashboardPage;
