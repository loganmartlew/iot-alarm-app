import { SetAlarm } from '@iot-alarm-app/api';
import { alarmSetSchema } from '@iot-alarm-app/validation';
import { StatusCodes } from 'http-status-codes';
import AlarmService from '../services/alarm.service';

export const setAlarm: SetAlarm = async (req) => {
  const alarmSetDto = alarmSetSchema.parse(req.body);

  const sleepSchedule = await AlarmService.setAlarm(alarmSetDto);

  return {
    status: StatusCodes.CREATED,
    message: 'Alarm set',
    data: sleepSchedule,
  };
};
