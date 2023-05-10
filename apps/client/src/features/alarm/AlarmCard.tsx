import { WakeTimeAlarm } from '@iot-alarm-app/types';
import { FC } from 'react';
import { Paper, Text, Group } from '@mantine/core';

interface Props {
  alarm: WakeTimeAlarm;
}

const AlarmCard: FC<Props> = ({ alarm }) => {
  return (
    <Paper p="md" radius="lg" withBorder>
      <Group>
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
          {alarm.time}
        </Text>
        <Group>
          {alarm.days.length <= 0 && <Text>Not scheduled</Text>}
          {alarm.days.length > 0 &&
            alarm.days.map((day) => (
              <Text key={day.systemName}>{day.name.slice(0, 3)}</Text>
            ))}
        </Group>
      </Group>
    </Paper>
  );
};

export default AlarmCard;
