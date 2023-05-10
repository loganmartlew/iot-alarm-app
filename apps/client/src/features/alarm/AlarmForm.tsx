import { WakeTimeDTO } from '@iot-alarm-app/api';
import { wakeTimeDataSchema } from '@iot-alarm-app/validation';
import {
  Group,
  Stack,
  TextInput,
  Text,
  Chip,
  Button,
  Box,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { WeekDay } from '@prisma/client';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';

const alarmFormSchema = z.object({
  hour: z.string().refine(
    (value) => {
      if (value === '') return false;
      const hour = Number(value);
      return hour >= 0 && hour <= 23;
    },
    { message: 'Hour must be between 0 and 23' }
  ),
  minute: z.string().refine(
    (value) => {
      if (value === '') return false;
      const hour = Number(value);
      return hour >= 0 && hour <= 59;
    },
    { message: 'Minute must be between 0 and 59' }
  ),
  second: z.string().refine(
    (value) => {
      if (value === '') return false;
      const hour = Number(value);
      return hour >= 0 && hour <= 59;
    },
    { message: 'Second must be between 0 and 59' }
  ),
  weekDays: z.array(
    z.enum([
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ])
  ),
});

type WeekDayString =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

type AlarmFormValues = z.infer<typeof alarmFormSchema>;

interface Props {
  weekDays: WeekDay[];
}

const AlarmForm: FC<Props> = ({ weekDays }) => {
  const form = useForm<AlarmFormValues>({
    initialValues: {
      hour: '00',
      minute: '00',
      second: '00',
      weekDays: [],
    },
    validate: zodResolver(alarmFormSchema),
  });

  const submit = (values: AlarmFormValues) => {
    const hours = values.hour.padStart(2, '0');
    const minutes = values.minute.padStart(2, '0');
    const seconds = values.second.padStart(2, '0');

    const wakeTimeData: WakeTimeDTO = {
      time: `${hours}:${minutes}:${seconds}`,
      days: values.weekDays,
    };

    try {
      const wakeTimeDto = wakeTimeDataSchema.parse(wakeTimeData);
      console.log(wakeTimeDto);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleWeekDay = (day: WeekDayString) => {
    const checked = form.values.weekDays.includes(day);

    if (checked) {
      form.setFieldValue(
        'weekDays',
        form.values.weekDays.filter((weekDay) => weekDay !== day)
      );
    }

    if (!checked) {
      form.setFieldValue('weekDays', [...form.values.weekDays, day]);
    }
  };

  return (
    <Box component="form" onSubmit={form.onSubmit(submit)}>
      <Stack>
        <Group spacing="xs">
          <TextInput
            label="Hour"
            type="number"
            withAsterisk
            sx={{ width: '4rem' }}
            {...form.getInputProps('hour')}
          />
          <Text mt="1.4em">:</Text>
          <TextInput
            label="Minute"
            withAsterisk
            sx={{ width: '4rem' }}
            {...form.getInputProps('minute')}
          />
          <Text mt="1.4em">:</Text>
          <TextInput
            label="Second"
            withAsterisk
            sx={{ width: '4rem' }}
            {...form.getInputProps('second')}
          />
        </Group>

        <Stack spacing="0.2em">
          <Text fw={500} fz="sm" color="black">
            Days
          </Text>
          <Group spacing="xs">
            {weekDays.map((weekDay) => (
              <Chip
                variant="outline"
                key={weekDay.id}
                onClick={() =>
                  toggleWeekDay(weekDay.systemName as WeekDayString)
                }
                checked={form.values.weekDays.includes(
                  weekDay.systemName as WeekDayString
                )}
              >
                {weekDay.name}
              </Chip>
            ))}
          </Group>
        </Stack>

        <Group>
          <Button type="submit" radius="md">
            Submit
          </Button>
          <Button
            component={Link}
            to="/alarms"
            color="red"
            variant="outline"
            radius="md"
          >
            Cancel
          </Button>
        </Group>
      </Stack>
    </Box>
  );
};

export default AlarmForm;
