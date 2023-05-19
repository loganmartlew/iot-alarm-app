import { dateTimeToDayjs } from '@iot-alarm-app/dates';
import { Paper, Text } from '@mantine/core';
import { AlarmStop } from '@prisma/client';
import { FC } from 'react';

interface Props {
  alarmStop: AlarmStop;
}

const AlarmStopCard: FC<Props> = ({ alarmStop }) => {
  return (
    <Paper p="md" radius="lg" withBorder>
      <Text
        fz="1.7rem"
        fw="bolder"
        sx={(theme) => ({
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.colors.gray[7],
        })}
      >
        {dateTimeToDayjs(alarmStop.datetime).format('HH:mm:ss')}
      </Text>
    </Paper>
  );
};

export default AlarmStopCard;
