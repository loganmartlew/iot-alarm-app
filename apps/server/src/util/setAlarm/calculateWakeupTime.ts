import { Dayjs } from 'dayjs';

const SLEEP_CYCLE_LENGTH = 1;

export const calculateWakeupTime = (sleepTime: Dayjs, wakeTime: Dayjs) => {
  const difference = Math.abs(sleepTime.diff(wakeTime, 'minutes'));

  const optimalWakeTime = wakeTime.subtract(
    difference % SLEEP_CYCLE_LENGTH,
    'minutes'
  );

  return optimalWakeTime;
};
