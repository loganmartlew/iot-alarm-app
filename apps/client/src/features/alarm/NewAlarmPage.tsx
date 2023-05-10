/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC } from 'react';
import PageWrapper from '../../components/PageWrapper';
import AlarmForm from './AlarmForm';
import { useWeekDays } from '../weekday/api/getWeekDays';

const NewAlarmPage: FC = () => {
  const weekDaysData = useWeekDays();

  return (
    <PageWrapper title="New Alarm" data={weekDaysData}>
      <AlarmForm weekDays={weekDaysData.data!} />
    </PageWrapper>
  );
};

export default NewAlarmPage;
