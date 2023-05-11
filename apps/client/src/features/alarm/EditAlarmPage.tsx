/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC } from 'react';
import PageWrapper from '../../components/PageWrapper';
import AlarmForm from './AlarmForm';
import { useWeekDays } from '../weekday/api/getWeekDays';
import { useNavigate, useParams } from 'react-router-dom';
import { WakeTimeDTO } from '@iot-alarm-app/api';
import { useAlarm } from './api/getAlarm';
import { combineDataForWrapper } from '../../util/combineDataForWrapper';
import { useUpdateAlarm } from './api/updateAlarm';

const EditAlarmPage: FC = () => {
  const params = useParams();

  const weekDaysData = useWeekDays();
  const alarmData = useAlarm(params.id || '0');
  const data = combineDataForWrapper(weekDaysData, alarmData);

  const navigate = useNavigate();
  const alarmsMutation = useUpdateAlarm(params.id || '0');

  const onSubmit = (dto: WakeTimeDTO) => {
    alarmsMutation.mutate(dto);
    navigate('/alarms');
  };

  return (
    <PageWrapper title="Edit Alarm" data={data}>
      <AlarmForm
        weekDays={weekDaysData.data!}
        onSubmit={onSubmit}
        initialData={alarmData.data}
      />
    </PageWrapper>
  );
};

export default EditAlarmPage;
