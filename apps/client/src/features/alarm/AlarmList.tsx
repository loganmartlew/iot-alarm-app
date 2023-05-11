import { WakeTimeAlarm } from '@iot-alarm-app/types';
import { FC } from 'react';
import { Stack, Text } from '@mantine/core';
import AlarmCard from './AlarmCard';
import { WeekDay } from '@prisma/client';
import { timeToDayjs } from '@iot-alarm-app/dates';

interface Props {
  alarms: WakeTimeAlarm[];
  weekDays: WeekDay[];
  onDelete: (id: string) => void;
}

const AlarmList: FC<Props> = ({ alarms, weekDays, onDelete }) => {
  if (alarms.length <= 0) {
    return <Text>No alarms found.</Text>;
  }

  const sortedAlarms = [...alarms].sort((a, b) => {
    const aDay = timeToDayjs(a.time);
    const bDay = timeToDayjs(b.time);

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
      {sortedAlarms.map((alarm) => (
        <AlarmCard
          key={alarm.id}
          alarm={alarm}
          weekDays={weekDays}
          onDelete={onDelete}
        />
      ))}
    </Stack>
  );
};

export default AlarmList;
