import { dateTimeToDayjs } from '@iot-alarm-app/dates';
import { Box, Button, Group, Paper, Rating, Stack, Text } from '@mantine/core';
import { SleepSchedule } from '@prisma/client';
import { FC, useState } from 'react';

interface Props {
  unratedRestPeriod: SleepSchedule;
  rating?: number;
  onSubmit: (rating: number, sleepScheduleId: string) => void;
}

const UnratedPeriodCard: FC<Props> = ({
  unratedRestPeriod,
  rating,
  onSubmit,
}) => {
  const isStatic = rating !== undefined;
  const [value, setValue] = useState(isStatic ? rating : 0);

  return (
    <Paper p="md" radius="lg" withBorder>
      <Group>
        <Group align="start" spacing="lg">
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
              {dateTimeToDayjs(unratedRestPeriod.sleepTime).format('HH:mm:ss')}
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
              {dateTimeToDayjs(unratedRestPeriod.sleepTime).format('D MMM')}
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
              {dateTimeToDayjs(unratedRestPeriod.optimalWakeTime).format(
                'HH:mm:ss'
              )}
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
              {dateTimeToDayjs(unratedRestPeriod.optimalWakeTime).format(
                'D MMM'
              )}
            </Text>
          </Stack>
        </Group>
        <Box sx={{ flexGrow: 1 }}>
          <Rating
            size="xl"
            value={value}
            onChange={isStatic ? () => null : setValue}
            readOnly={isStatic}
          />
        </Box>
        {!isStatic && (
          <Button onClick={() => onSubmit(value, unratedRestPeriod.id)}>
            Submit Rating
          </Button>
        )}
      </Group>
    </Paper>
  );
};

export default UnratedPeriodCard;
