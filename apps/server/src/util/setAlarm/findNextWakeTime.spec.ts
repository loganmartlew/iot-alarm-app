import { WakeTime, WeekDay } from '@prisma/client';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Alarm } from '../../services/alarm.service';
import { findNextWakeTime } from './findNextWakeTime';
import { timeToDayjs, dateTimeToDayjs } from '@iot-alarm-app/dates';
import { WakeTimeAlarm } from '@iot-alarm-app/types';

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
    time: '07:00:00',
    wakeTimeId: '1',
  },
  {
    day: 'wednesday',
    time: '07:00:00',
    wakeTimeId: '1',
  },
  {
    day: 'friday',
    time: '07:00:00',
    wakeTimeId: '1',
  },
];

const sleepTime = '2021-08-04 23:00:00';

const wakeTimes: WakeTimeAlarm[] = [
  {
    id: '1',
    time: '07:00:00',
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
      dateTimeToDayjs(sleepTime).day(4)
    );

    expect(weekday).toBe(5);
    expect(timeToDayjs(wakeTimeFound?.time).hour()).toBe(7);
  });

  it('should find monday', () => {
    const { wakeTimeFound, weekday } = findNextWakeTime(
      wakeTimes,
      sortedAlarms,
      dateTimeToDayjs(sleepTime).day(5)
    );

    expect(weekday).toBe(1);
    expect(timeToDayjs(wakeTimeFound?.time).hour()).toBe(7);
  });
});
