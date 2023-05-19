import { dateTimeToDayjs } from '@iot-alarm-app/dates';
import { Stack, Text } from '@mantine/core';
import { AlarmStop } from '@prisma/client';
import { FC } from 'react';
import AlarmStopCard from './AlarmStopCard';

interface Props {
  alarmStops: AlarmStop[];
}

const AlarmStopList: FC<Props> = ({ alarmStops }) => {
  if (alarmStops.length <= 0) {
    return <Text>No alarm dismissals found.</Text>;
  }

  const sortedAlarmStops = [...alarmStops].sort((a, b) => {
    const aDay = dateTimeToDayjs(a.datetime);
    const bDay = dateTimeToDayjs(b.datetime);

    if (aDay.isBefore(bDay)) {
      return -1;
    }

    if (aDay.isAfter(bDay)) {
      return 1;
    }

    return 0;
  });

  return (
    <Stack>
      {sortedAlarmStops.map((alarmStop) => (
        <AlarmStopCard key={alarmStop.id} alarmStop={alarmStop} />
      ))}
    </Stack>
  );
};

export default AlarmStopList;
