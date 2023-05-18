import { Text } from '@mantine/core';
import { FC } from 'react';
import { useAverageSleepDuration } from '../api/getAverageSleepDuration';
import ReportCard from '../ReportCard';

const AverageSleepDuration: FC = () => {
  const averageSleepDurationData = useAverageSleepDuration();

  return (
    <ReportCard
      data={averageSleepDurationData}
      title="Average Sleep Duration"
      info="The average time between when you go to sleep and when your alarm goes off"
    >
      <Text color="blue" fw="bolder" fz="3rem" align="center">
        {averageSleepDurationData.data}
      </Text>
    </ReportCard>
  );
};

export default AverageSleepDuration;
