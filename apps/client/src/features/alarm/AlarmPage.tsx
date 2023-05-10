/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC } from 'react';
import PageWrapper from '../../components/PageWrapper';
import { useAlarms } from './api/getAlarms';
import AlarmList from './AlarmList';
import { useWeekDays } from '../weekday/api/getWeekDays';
import { combineDataForWrapper } from '../../util/combineDataForWrapper';

const AlarmPage: FC = () => {
  const alarmsData = useAlarms();
  const weekDaysData = useWeekDays();

  const data = combineDataForWrapper(alarmsData, weekDaysData);

  return (
    <PageWrapper title="Alarms" data={data}>
      <AlarmList alarms={alarmsData.data!} weekDays={weekDaysData.data!} />
    </PageWrapper>
  );
};

export default AlarmPage;
