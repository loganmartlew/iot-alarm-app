import { AlarmSetDTO, SleepScheduleDTO } from '@iot-alarm-app/api';
import { ApiError } from '@iot-alarm-app/errors';
import { sleepScheduleDataSchema } from '@iot-alarm-app/validation';
import { SleepSchedule } from '@prisma/client';
import { calculateWakeupTime } from '../util/setAlarm/calculateWakeupTime';
import { findNextWakeTime } from '../util/setAlarm/findNextWakeTime';
import { getSortedAlarms } from '../util/setAlarm/getSortedAlarms';
import SleepScheduleService from './sleepSchedule.service';
import WakeTimeService from './wakeTime.service';
import { WeekDaySystemName } from './weekDay.service';
import {
  dateTimeToDayjs,
  dayjsToDateTime,
  timeToDayjs,
} from '@iot-alarm-app/dates';

export interface Alarm {
  day: WeekDaySystemName;
  time: string;
  wakeTimeId: string;
}

export const weekDayNumbers = {
  monday: { actual: 0, dayjs: 1 },
  tuesday: { actual: 1, dayjs: 2 },
  wednesday: { actual: 2, dayjs: 3 },
  thursday: { actual: 3, dayjs: 4 },
  friday: { actual: 4, dayjs: 5 },
  saturday: { actual: 5, dayjs: 6 },
  sunday: { actual: 6, dayjs: 0 },
};

export default class AlarmService {
  static async setAlarm(alarmSetDto: AlarmSetDTO): Promise<SleepSchedule> {
    const alarmSetTime = dateTimeToDayjs(alarmSetDto.timeTriggered);
    const sleepTime = alarmSetTime.add(10, 'minutes');

    console.log(alarmSetTime);

    const wakeTimes = await WakeTimeService.getAll();

    if (wakeTimes.length <= 0) {
      throw new ApiError(null, 3002, 'No wake up time found');
    }

    const sortedAlarms = getSortedAlarms(wakeTimes);

    const { wakeTimeFound, weekday } = findNextWakeTime(
      wakeTimes,
      sortedAlarms,
      sleepTime
    );

    const wakeUpTime = sleepTime
      .day(weekday)
      .hour(timeToDayjs(wakeTimeFound.time).hour())
      .minute(timeToDayjs(wakeTimeFound.time).minute());

    const adjustedWakeUpTime =
      weekday < sleepTime.day() ? wakeUpTime.add(1, 'week') : wakeUpTime;

    const optimalWakeTime = calculateWakeupTime(sleepTime, adjustedWakeUpTime);

    const sleepScheduleDto: SleepScheduleDTO = {
      sleepTime: dayjsToDateTime(sleepTime),
      wakeTime: dayjsToDateTime(adjustedWakeUpTime),
      optimalWakeTime: dayjsToDateTime(optimalWakeTime),
    };

    const validSleepScheduleDto =
      sleepScheduleDataSchema.parse(sleepScheduleDto);

    console.log(validSleepScheduleDto);

    return await SleepScheduleService.createSleepSchedule(
      validSleepScheduleDto
    );
  }
}
