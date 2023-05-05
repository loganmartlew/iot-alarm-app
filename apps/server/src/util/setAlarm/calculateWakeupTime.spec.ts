import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { calculateWakeupTime } from './calculateWakeupTime';

dayjs.extend(utc);
dayjs.extend(customParseFormat);

describe('test calculateWakeupTime', () => {
  it('optimal wake up time should be before wake time', () => {
    const sleepTime = dayjs.utc('2021-08-04T23:00:00.000');
    const wakeTime = dayjs.utc('2021-08-05T07:00:00.000');

    const optimalWakeTime = calculateWakeupTime(sleepTime, wakeTime);

    expect(optimalWakeTime.isBefore(wakeTime)).toBeTruthy();
  });
  it('optimal wake up time should multiple of 90 minutes after sleep time', () => {
    const sleepTime = dayjs.utc('2021-08-04T23:56:00.000');
    const wakeTime = dayjs.utc('2021-08-05T09:21:00.000');

    const optimalWakeTime = calculateWakeupTime(sleepTime, wakeTime);

    const difference = Math.abs(sleepTime.diff(optimalWakeTime, 'minutes'));

    expect(difference % 90).toBe(0);
  });
});
