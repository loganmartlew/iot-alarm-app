import { ApiError } from '@iot-alarm-app/errors';
import { WakeTime, WeekDay } from '@prisma/client';
import dayjs, { Dayjs } from 'dayjs';
import { Alarm, weekDayNumbers } from '../../services/alarm.service';

export const findNextWakeTime = (
  wakeTimes: (WakeTime & {
    days: WeekDay[];
  })[],
  sortedAlarms: Alarm[],
  sleepTime: Dayjs
) => {
  let wakeTimeFound: WakeTime | null = null;
  let weekday = sleepTime.day();
  let todaySkipped = false;

  while (!wakeTimeFound) {
    const filteredAlarms = sortedAlarms.filter(
      (alarm) => weekDayNumbers[alarm.day].dayjs === weekday
    );

    if (filteredAlarms.length <= 0) {
      weekday = weekday < 6 ? weekday + 1 : 0;
      todaySkipped = true;
      continue;
    }

    const wakeTime =
      wakeTimes.find(
        (wakeTime) => wakeTime.id === filteredAlarms[0].wakeTimeId
      ) ?? null;

    const wakeTimeNormalised = dayjs
      .utc(wakeTime?.time)
      .year(2020)
      .month(1)
      .date(1);
    const sleepTimeNormalised = sleepTime.year(2020).month(1).date(1);

    if (wakeTimeNormalised.isBefore(sleepTimeNormalised) && !todaySkipped) {
      weekday = weekday < 6 ? weekday + 1 : 0;
      todaySkipped = true;
      continue;
    } else {
      wakeTimeFound = wakeTime;
      todaySkipped = true;
    }
  }

  if (!wakeTimeFound) {
    throw new ApiError(null, 3002, 'No wake up time found');
  }

  return { wakeTimeFound, weekday };
};
