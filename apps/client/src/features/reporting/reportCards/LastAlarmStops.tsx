import { Text } from '@mantine/core';
import { FC } from 'react';
import { useLastAlarmStops } from '../api/getLastAlarmStops';
import ReportCard from '../ReportCard';

const LastAlarmStops: FC = () => {
  const lastAlarmStopsData = useLastAlarmStops();

  return (
    <ReportCard
      data={lastAlarmStopsData}
      title="Last Snooze Count"
      info="The number of times you turned off your alarm at the end of your previous recorded rest period"
    >
      <Text color="blue" fw="bolder" fz="3rem" align="center">
        {lastAlarmStopsData.data}
      </Text>
    </ReportCard>
  );
};

export default LastAlarmStops;
