/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC } from 'react';
import PageWrapper from '../../components/PageWrapper';
import { useAlarms } from './api/getAlarms';
import AlarmList from './AlarmList';
import { useWeekDays } from '../weekday/api/getWeekDays';
import { combineDataForWrapper } from '../../util/combineDataForWrapper';
import { Button } from '@mantine/core';
import { MdOutlineAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AlarmPage: FC = () => {
  const alarmsData = useAlarms();
  const weekDaysData = useWeekDays();

  const data = combineDataForWrapper(alarmsData, weekDaysData);

  const button = (
    <Button
      component={Link}
      to="/alarms/new"
      leftIcon={<MdOutlineAdd size="1rem" />}
      size="xs"
    >
      New Alarm
    </Button>
  );

  return (
    <PageWrapper title="Alarms" data={data} rightSection={button}>
      <AlarmList alarms={alarmsData.data!} weekDays={weekDaysData.data!} />
    </PageWrapper>
  );
};

export default AlarmPage;
