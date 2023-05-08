import { WakeTime, WeekDay } from '@prisma/client';
import { Alarm, weekDayNumbers } from '../../services/alarm.service';
import { WeekDaySystemName } from '../../services/weekDay.service';
import { timeToDayjs } from '@iot-alarm-app/dates';

export const getSortedAlarms = (
  wakeTimes: (WakeTime & {
    days: WeekDay[];
  })[]
) => {
  const alarms = wakeTimes.reduce((acc, curr) => {
    const alarms: Alarm[] = curr.days.map((day) => ({
      day: day.systemName as WeekDaySystemName,
      time: curr.time,
      wakeTimeId: curr.id,
    }));
    return [...acc, ...alarms];
  }, [] as Alarm[]);

  const sortedAlarms = alarms.sort((a, b) => {
    const aDate = timeToDayjs(a.time)
      .set('year', 2020)
      .set('month', 1)
      .set('date', 1)
      .set('day', weekDayNumbers[a.day].dayjs)
      .add(weekDayNumbers[a.day].dayjs === 0 ? 7 : 0, 'day');

    const bDate = timeToDayjs(b.time)
      .set('year', 2020)
      .set('month', 1)
      .set('date', 1)
      .set('day', weekDayNumbers[b.day].dayjs)
      .add(weekDayNumbers[b.day].dayjs === 0 ? 7 : 0, 'day');

    if (aDate.isBefore(bDate)) return -1;
    if (aDate.isAfter(bDate)) return 1;
    return 0;
  });

  return sortedAlarms;
};
