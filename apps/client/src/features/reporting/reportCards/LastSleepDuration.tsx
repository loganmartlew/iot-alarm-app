import { Text } from '@mantine/core';
import { FC } from 'react';
import { useLastSleepDuration } from '../api/getLastSleepDuration';
import ReportCard from '../ReportCard';

const LastSleepDuration: FC = () => {
  const lastSleepDurationData = useLastSleepDuration();

  return (
    <ReportCard
      data={lastSleepDurationData}
      title="Last Sleep Duration"
      info="The duration of your last recorded rest period"
    >
      <Text color="blue" fw="bolder" fz="3rem" align="center">
        {lastSleepDurationData.data}
      </Text>
    </ReportCard>
  );
};

export default LastSleepDuration;
