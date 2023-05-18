import { timeToDayjs } from '@iot-alarm-app/dates';
import { Text } from '@mantine/core';
import { FC } from 'react';
import { useRecommendedSleepTime } from '../api/getRecommendedSleepTime';
import ReportCard from '../ReportCard';

const RecommendedSleepTime: FC = () => {
  const recommendedSleepTimeData = useRecommendedSleepTime();

  return (
    <ReportCard
      data={recommendedSleepTimeData}
      title="Recommended Sleep Time"
      info="The time we recommend you go to sleep based on your previous sleep data"
    >
      <Text color="blue" fw="bolder" fz="3rem" align="center">
        {timeToDayjs(recommendedSleepTimeData.data || '').format('HH:mm')}
      </Text>
    </ReportCard>
  );
};

export default RecommendedSleepTime;
