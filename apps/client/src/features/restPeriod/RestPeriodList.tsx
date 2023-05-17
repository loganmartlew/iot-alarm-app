import { dateTimeToDayjs } from '@iot-alarm-app/dates';
import { Stack, Text } from '@mantine/core';
import { SleepSchedule } from '@prisma/client';
import { FC } from 'react';
import RestPeriodCard from './RestPeriodCard';

interface Props {
  restPeriods: SleepSchedule[];
}

const RestPeriodList: FC<Props> = ({ restPeriods }) => {
  if (restPeriods.length <= 0) {
    return <Text>No rest periods found.</Text>;
  }

  const sortedRestPeriods = [...restPeriods].sort((a, b) => {
    const aDay = dateTimeToDayjs(a.sleepTime);
    const bDay = dateTimeToDayjs(b.sleepTime);

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
      {sortedRestPeriods.map((restPeriod) => (
        <RestPeriodCard key={restPeriod.id} restPeriod={restPeriod} />
      ))}
    </Stack>
  );
};

export default RestPeriodList;
