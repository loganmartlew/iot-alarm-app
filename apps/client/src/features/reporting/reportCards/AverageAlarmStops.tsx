import { Text } from '@mantine/core';
import { FC } from 'react';
import { useAverageAlarmStops } from '../api/getAverageAlarmStops';
import ReportCard from '../ReportCard';

const AverageAlarmStops: FC = () => {
  const averageAlarmStopsData = useAverageAlarmStops();

  return (
    <ReportCard
      data={averageAlarmStopsData}
      title="Average Snooze Count"
      info="The average number of times you turn off your alarm in the morning before getting up"
    >
      <Text color="blue" fw="bolder" fz="3rem" align="center">
        {averageAlarmStopsData.data}
      </Text>
    </ReportCard>
  );
};

export default AverageAlarmStops;
