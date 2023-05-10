/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC } from 'react';
import PageWrapper from '../../components/PageWrapper';
import { useAlarms } from './api/getAlarms';
import AlarmList from './AlarmList';

const AlarmPage: FC = () => {
  const alarmData = useAlarms();
  const { data: alarms } = alarmData;

  return (
    <PageWrapper title="Alarms" data={alarmData}>
      <AlarmList alarms={alarms!} />
    </PageWrapper>
  );
};

export default AlarmPage;
