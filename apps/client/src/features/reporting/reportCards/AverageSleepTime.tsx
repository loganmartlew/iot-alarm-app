import { timeToDayjs } from '@iot-alarm-app/dates';
import { Text } from '@mantine/core';
import { FC } from 'react';
import { useAverageSleepTime } from '../api/getAverageSleepTime';
import ReportCard from '../ReportCard';

const AverageSleepTime: FC = () => {
  const averageSleepTimeData = useAverageSleepTime();

  return (
    <ReportCard
      data={averageSleepTimeData}
      title="Average Sleep Time"
      info="The average time of day that you turn on your alarm"
    >
      <Text color="blue" fw="bolder" fz="3rem" align="center">
        {timeToDayjs(averageSleepTimeData.data || '').format('HH:mm')}
      </Text>
    </ReportCard>
  );
};

export default AverageSleepTime;
