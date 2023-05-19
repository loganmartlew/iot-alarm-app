import { dateTimeToDayjs } from '@iot-alarm-app/dates';
import { Stack, Text } from '@mantine/core';
import { SleepSchedule } from '@prisma/client';
import { FC } from 'react';
import UnratedPeriodCard from './UnratedPeriodCard';

interface Props {
  unratedRestPeriods: SleepSchedule[];
  onSubmit: (rating: number, sleepScheduleId: string) => void;
}

const UnratedPeriodList: FC<Props> = ({ unratedRestPeriods, onSubmit }) => {
  if (unratedRestPeriods.length <= 0) {
    return <Text>No unrated rest periods found.</Text>;
  }

  const sortedRestPeriods = [...unratedRestPeriods].sort((a, b) => {
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
      {sortedRestPeriods.map((unratedRestPeriod) => (
        <UnratedPeriodCard
          key={unratedRestPeriod.id}
          unratedRestPeriod={unratedRestPeriod}
          onSubmit={onSubmit}
        />
      ))}
    </Stack>
  );
};

export default UnratedPeriodList;
