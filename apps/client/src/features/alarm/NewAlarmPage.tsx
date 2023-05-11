/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC } from 'react';
import PageWrapper from '../../components/PageWrapper';
import AlarmForm from './AlarmForm';
import { useWeekDays } from '../weekday/api/getWeekDays';
import { useCreateAlarm } from './api/createAlarm';
import { WakeTimeDTO } from '@iot-alarm-app/api';
import { useNavigate } from 'react-router-dom';

const NewAlarmPage: FC = () => {
  const weekDaysData = useWeekDays();
  const navigate = useNavigate();

  const alarmsMutation = useCreateAlarm();

  const onSubmit = (dto: WakeTimeDTO) => {
    alarmsMutation.mutate(dto);
    navigate('/alarms');
  };

  return (
    <PageWrapper title="New Alarm" data={weekDaysData}>
      <AlarmForm weekDays={weekDaysData.data!} onSubmit={onSubmit} />
    </PageWrapper>
  );
};

export default NewAlarmPage;
