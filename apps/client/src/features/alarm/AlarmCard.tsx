import { WakeTimeAlarm } from '@iot-alarm-app/types';
import { FC } from 'react';
import { Paper, Text, Group, ActionIcon } from '@mantine/core';
import { WeekDay } from '@prisma/client';
import WeekDayBadge from '../weekday/WeekDayBadge';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface Props {
  alarm: WakeTimeAlarm;
  weekDays: WeekDay[];
  onDelete: (id: string) => void;
}

const AlarmCard: FC<Props> = ({ alarm, weekDays, onDelete }) => {
  return (
    <Paper p="md" radius="lg" withBorder>
      <Group sx={{ justifyContent: 'space-between' }}>
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
          <Group spacing="0.3em">
            {weekDays.map((day) => (
              <WeekDayBadge
                key={day.id}
                weekDay={day}
                active={
                  !!alarm.days.find(
                    (alarmDay) => alarmDay.systemName === day.systemName
                  )
                }
              />
            ))}
          </Group>
        </Group>
        <Group spacing="xs">
          <ActionIcon
            component={Link}
            to={`/alarms/${alarm.id}`}
            radius="xl"
            size="lg"
            color="blue"
            sx={(theme) => ({
              color: theme.colors.gray[6],
              transition: 'color 50ms ease',
              '&:hover': {
                color: theme.colors[theme.primaryColor][6],
              },
            })}
          >
            <MdEdit size="1.5rem" />
          </ActionIcon>
          <ActionIcon
            color="red"
            radius="xl"
            size="lg"
            onClick={() => onDelete(alarm.id)}
          >
            <MdDelete size="1.5rem" />
          </ActionIcon>
        </Group>
      </Group>
    </Paper>
  );
};

export default AlarmCard;
