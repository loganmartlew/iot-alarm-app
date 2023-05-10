import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { WakeTime, WeekDay } from '@prisma/client';
import { getSortedAlarms } from './getSortedAlarms';
import { timeToDayjs } from '@iot-alarm-app/dates';
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
  {
    id: '2',
    time: '06:00:00',
    days: [
      generateWeekDay('tuesday'),
      generateWeekDay('wednesday'),
      generateWeekDay('thursday'),
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    time: '10:00:00',
    days: [generateWeekDay('saturday'), generateWeekDay('sunday')],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

describe('test getSortedAlarms', () => {
  it('should sort week days', () => {
    const sortedAlarms = getSortedAlarms(wakeTimes);

    expect(sortedAlarms[0].day).toBe('monday');
    expect(sortedAlarms[1].day).toBe('tuesday');
    expect(sortedAlarms[2].day).toBe('wednesday');
    expect(sortedAlarms[3].day).toBe('wednesday');
    expect(sortedAlarms[4].day).toBe('thursday');
    expect(sortedAlarms[5].day).toBe('friday');
    expect(sortedAlarms[6].day).toBe('saturday');
    expect(sortedAlarms[7].day).toBe('sunday');
  });
  it('should sort times', () => {
    const sortedAlarms = getSortedAlarms(wakeTimes);

    expect(
      timeToDayjs(sortedAlarms[2].time).isBefore(
        timeToDayjs(sortedAlarms[3].time)
      )
    ).toBeTruthy();
  });
});
