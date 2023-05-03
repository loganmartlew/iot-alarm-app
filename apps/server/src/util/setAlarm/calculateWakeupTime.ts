import { Dayjs } from 'dayjs';

const SLEEP_CYCLE_LENGTH = 90;

export const calculateWakeupTime = (sleepTime: Dayjs, wakeTime: Dayjs) => {
  const difference = sleepTime.diff(wakeTime, 'minutes');

  const optimalWakeTime = wakeTime.subtract(
    difference % SLEEP_CYCLE_LENGTH,
    'minutes'
  );

  return optimalWakeTime;
};
