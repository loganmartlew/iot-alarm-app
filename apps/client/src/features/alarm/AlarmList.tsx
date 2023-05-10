import { WakeTimeAlarm } from '@iot-alarm-app/types';
import { FC } from 'react';
import { Stack, Text } from '@mantine/core';
import AlarmCard from './AlarmCard';

interface Props {
  alarms: WakeTimeAlarm[];
}

const AlarmList: FC<Props> = ({ alarms }) => {
  if (alarms.length <= 0) {
    return <Text>No alarms found.</Text>;
  }

  return (
    <Stack>
      {alarms.map((alarm) => (
        <AlarmCard key={alarm.id} alarm={alarm} />
      ))}
    </Stack>
  );
};

export default AlarmList;
