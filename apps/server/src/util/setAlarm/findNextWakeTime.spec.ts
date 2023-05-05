import { WakeTime, WeekDay } from '@prisma/client';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Alarm } from '../../services/alarm.service';
import { findNextWakeTime } from './findNextWakeTime';

dayjs.extend(utc);
dayjs.extend(customParseFormat);

const generateWeekDay = (weekDay: string) => {
  return {
    id: '1',
    name: weekDay,
    systemName: weekDay,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

const sortedAlarms: Alarm[] = [
  {
    day: 'monday',
    time: dayjs.utc('2021-08-04T07:00:00.000').toDate(),
    wakeTimeId: '1',
  },
  {
    day: 'wednesday',
    time: dayjs.utc('2021-08-04T07:00:00.000').toDate(),
    wakeTimeId: '1',
  },
  {
    day: 'friday',
    time: dayjs.utc('2021-08-04T07:00:00.000').toDate(),
    wakeTimeId: '1',
  },
];

const sleepTime = dayjs.utc('2021-08-04T23:00:00.000');

const wakeTimes: (WakeTime & {
  days: WeekDay[];
})[] = [
  {
    id: '1',
    time: new Date('2021-08-04T07:00:00.000Z'),
    days: [
      generateWeekDay('monday'),
      generateWeekDay('wednesday'),
      generateWeekDay('friday'),
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

describe('test findNextWakeTime', () => {
  it('should find friday', () => {
    const { wakeTimeFound, weekday } = findNextWakeTime(
      wakeTimes,
      sortedAlarms,
      sleepTime.day(4)
    );
    expect(weekday).toBe(5);
    expect(dayjs.utc(wakeTimeFound?.time).hour()).toBe(7);
  });
  it('should find monday', () => {
    const { wakeTimeFound, weekday } = findNextWakeTime(
      wakeTimes,
      sortedAlarms,
      sleepTime.day(5)
    );
    expect(weekday).toBe(1);
    expect(dayjs.utc(wakeTimeFound?.time).hour()).toBe(7);
  });
});
