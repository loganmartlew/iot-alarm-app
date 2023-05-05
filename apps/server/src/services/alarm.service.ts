import { AlarmSetDTO, SleepScheduleDTO } from '@iot-alarm-app/api';
import { ApiError } from '@iot-alarm-app/errors';
import { sleepScheduleDataSchema } from '@iot-alarm-app/validation';
import { SleepSchedule } from '@prisma/client';
import dayjs from 'dayjs';
import { calculateWakeupTime } from '../util/setAlarm/calculateWakeupTime';
import { findNextWakeTime } from '../util/setAlarm/findNextWakeTime';
import { getSortedAlarms } from '../util/setAlarm/getSortedAlarms';
import SleepScheduleService from './sleepSchedule.service';
import WakeTimeService from './wakeTime.service';
import { WeekDaySystemName } from './weekDay.service';

export interface Alarm {
  day: WeekDaySystemName;
  time: Date;
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
    const alarmSetTime = dayjs.utc(alarmSetDto.timeTriggered);
    const sleepTime = alarmSetTime.add(10, 'minutes');

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
      .hour(dayjs.utc(wakeTimeFound.time).hour())
      .minute(dayjs.utc(wakeTimeFound.time).minute());

    const adjustedWakeUpTime =
      weekday < sleepTime.day() ? wakeUpTime.add(1, 'week') : wakeUpTime;

    const optimalWakeTime = calculateWakeupTime(sleepTime, adjustedWakeUpTime);

    const sleepScheduleDto: SleepScheduleDTO = {
      sleepTime: sleepTime.toDate().toISOString(),
      wakeTime: adjustedWakeUpTime.toDate().toISOString(),
      optimalWakeTime: optimalWakeTime.toDate().toISOString(),
    };

    const validSleepScheduleDto =
      sleepScheduleDataSchema.parse(sleepScheduleDto);

    return await SleepScheduleService.createSleepSchedule(
      validSleepScheduleDto
    );
  }
}
