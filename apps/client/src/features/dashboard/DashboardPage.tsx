import { Stack } from '@mantine/core';
import { FC } from 'react';
import ReportingSection from '../reporting/ReportingSection';

const DashboardPage: FC = () => {
  return (
    <Stack>
      <ReportingSection title="Recommendations">No data...</ReportingSection>
      <ReportingSection title="Averages">No data...</ReportingSection>
      <ReportingSection title="Last Rest Period">No data...</ReportingSection>
    </Stack>
  );
};

export default DashboardPage;
