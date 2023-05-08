import { dateTimeToDayjs } from '@iot-alarm-app/dates';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { calculateWakeupTime } from './calculateWakeupTime';

dayjs.extend(utc);
dayjs.extend(customParseFormat);

describe('test calculateWakeupTime', () => {
  it('optimal wake up time should be before wake time', () => {
    const sleepTime = dateTimeToDayjs('2021-08-04 23:00:00');
    const wakeTime = dateTimeToDayjs('2021-08-05 07:00:00');

    const optimalWakeTime = calculateWakeupTime(sleepTime, wakeTime);

    expect(optimalWakeTime.isBefore(wakeTime)).toBeTruthy();
  });
  it('optimal wake up time should multiple of 90 minutes after sleep time', () => {
    const sleepTime = dateTimeToDayjs('2021-08-04 23:56:00');
    const wakeTime = dateTimeToDayjs('2021-08-05 09:21:00');

    const optimalWakeTime = calculateWakeupTime(sleepTime, wakeTime);

    const difference = Math.abs(sleepTime.diff(optimalWakeTime, 'minutes'));

    expect(difference % 90).toBe(0);
  });
});
