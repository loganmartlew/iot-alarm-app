import { dateTimeToDayjs } from '@iot-alarm-app/dates';
import { Button, Group, Paper, Stack, Text } from '@mantine/core';
import { SleepSchedule } from '@prisma/client';
import { FC } from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface Props {
  restPeriod: SleepSchedule;
}

const RestPeriodCard: FC<Props> = ({ restPeriod }) => {
  return (
    <Paper p="md" radius="lg" withBorder>
      <Group>
        <Group align="start" spacing="lg" sx={{ flexGrow: 1 }}>
          <Stack spacing="0">
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
              {dateTimeToDayjs(restPeriod.sleepTime).format('HH:mm:ss')}
            </Text>
            <Text
              fz="0.9rem"
              fw="lighter"
              sx={(theme) => ({
                color:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[0]
                    : theme.colors.gray[7],
              })}
            >
              {dateTimeToDayjs(restPeriod.sleepTime).format('D MMM')}
            </Text>
          </Stack>
          <Text fz="1.7rem" fw="bolder" sx={{ lineHeight: '2.5rem' }}>
            -
          </Text>
          <Stack spacing="0">
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
              {dateTimeToDayjs(restPeriod.optimalWakeTime).format('HH:mm:ss')}
            </Text>
            <Text
              fz="0.9rem"
              fw="lighter"
              sx={(theme) => ({
                color:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[0]
                    : theme.colors.gray[7],
              })}
            >
              {dateTimeToDayjs(restPeriod.optimalWakeTime).format('D MMM')}
            </Text>
          </Stack>
        </Group>
        <Button
          component={Link}
          to={`/restperiods/${restPeriod.id}`}
          leftIcon={<MdOpenInNew />}
        >
          View Details
        </Button>
      </Group>
    </Paper>
  );
};

export default RestPeriodCard;
