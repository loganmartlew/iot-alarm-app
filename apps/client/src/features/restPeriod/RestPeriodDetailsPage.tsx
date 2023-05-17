/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { dateTimeToDayjs } from '@iot-alarm-app/dates';
import { Group, Stack, Title } from '@mantine/core';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper';
import AlarmStopList from './AlarmStopList';
import { useRestPeriod } from './api/getRestPeriod';

const RestPeriodDetailsPage: FC = () => {
  const params = useParams();

  const restPeriodData = useRestPeriod(params.id || '');
  const restPeriod = restPeriodData.data;
  const alarmStops = restPeriod!.alarmStops;

  return (
    <>
      <PageWrapper title="Rest Period" data={restPeriodData}>
        <Group spacing="xl" mt="md">
          <Stack spacing={0}>
            <Title order={4}>
              {dateTimeToDayjs(restPeriod!.sleepTime).format('D MMMM')}
            </Title>
            <Title order={3}>
              {dateTimeToDayjs(restPeriod!.sleepTime).format('HH:mm:ss')}
            </Title>
          </Stack>
          <Title order={2}>-</Title>
          <Stack spacing={0}>
            <Title order={4}>
              {dateTimeToDayjs(restPeriod!.optimalWakeTime).format('D MMMM')}
            </Title>
            <Title order={3}>
              {dateTimeToDayjs(restPeriod!.optimalWakeTime).format('HH:mm:ss')}
            </Title>
          </Stack>
        </Group>
      </PageWrapper>
      <PageWrapper title="Alarm Dismissals" data={restPeriodData}>
        <AlarmStopList alarmStops={alarmStops} />
      </PageWrapper>
    </>
  );
};

export default RestPeriodDetailsPage;
