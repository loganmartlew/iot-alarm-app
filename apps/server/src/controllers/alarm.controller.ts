import { CancelAlarm, SetAlarm, StopAlarm } from '@iot-alarm-app/api';
import {
  alarmCancelSchema,
  alarmSetSchema,
  alarmStopSchema,
} from '@iot-alarm-app/validation';
import { StatusCodes } from 'http-status-codes';
import AlarmService from '../services/alarm.service';
import SleepScheduleService from '../services/sleepSchedule.service';
import IOTService from '../services/iot.service';

export const setAlarm: SetAlarm = async (req) => {
  const alarmSetDto = alarmSetSchema.parse(req.body);

  const sleepSchedule = await AlarmService.setAlarm(alarmSetDto);

  // Send to IOT platform
  await IOTService.sendMessage('setalarm', sleepSchedule);

  return {
    status: StatusCodes.CREATED,
    message: 'Alarm set',
    data: sleepSchedule,
  };
};

export const stopAlarm: StopAlarm = async (req) => {
  const alarmStopDto = alarmStopSchema.parse(req.body);

  await AlarmService.stopAlarm(alarmStopDto);

  // Send to IOT platform
  await IOTService.sendMessage('snoozealarm', alarmStopDto);

  return {
    status: StatusCodes.CREATED,
    message: 'Alarm stopped',
  };
};

export const cancelAlarm: CancelAlarm = async (req) => {
  const alarmCancelDto = alarmCancelSchema.parse(req.body);

  await SleepScheduleService.completeSleepSchedule(
    alarmCancelDto.sleepScheduleId
  );

  // Send to IOT platform
  await IOTService.sendMessage('cancelalarm', alarmCancelDto);

  return {
    status: StatusCodes.OK,
    message: 'Alarm cancelled',
  };
};
