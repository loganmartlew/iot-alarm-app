import { ApiError } from '@iot-alarm-app/errors';
import { WakeTime, WeekDay } from '@prisma/client';
import { Alarm, weekDayNumbers } from '../../services/alarm.service';

export const findNextWakeTime = (
  wakeTimes: (WakeTime & {
    days: WeekDay[];
  })[],
  sortedAlarms: Alarm[],
  sleepTimeDay: number
) => {
  let wakeTimeFound: WakeTime | null = null;
  let weekday = sleepTimeDay;

  while (!wakeTimeFound) {
    const filteredAlarms = sortedAlarms.filter(
      (alarm) => weekDayNumbers[alarm.day].actual === weekday
    );

    if (filteredAlarms.length <= 0) {
      weekday = weekday < 6 ? weekday + 1 : 0;
      continue;
    }

    wakeTimeFound =
      wakeTimes.find(
        (wakeTime) => wakeTime.id === filteredAlarms[0].wakeTimeId
      ) ?? null;
  }

  if (!wakeTimeFound) {
    throw new ApiError(null, 3002, 'No wake up time found');
  }

  return { wakeTimeFound, weekday };
};
