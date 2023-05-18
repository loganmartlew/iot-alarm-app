import {
  dateTimeToDayjs,
  dayjsToTime,
  timeToDayjs,
} from '@iot-alarm-app/dates';
import { Dayjs } from 'dayjs';
import db from '../db';
import SleepScheduleService from './sleepSchedule.service';

const normaliseDate = (date: Dayjs) => {
  return date.year(2021).month(0).date(1);
};

export default class ReportingService {
  static async averageSleepTime() {
    const sleepSchedules = await SleepScheduleService.getCompleted();

    const baseTime = normaliseDate(timeToDayjs('00:00:00'));

    const scheduleSeconds = sleepSchedules.map((schedule) => {
      const sleepTime = normaliseDate(dateTimeToDayjs(schedule.sleepTime));

      const sleepTimeSeconds = sleepTime.diff(baseTime, 'seconds');

      return sleepTimeSeconds;
    });

    const averageSeconds =
      scheduleSeconds.reduce((a, b) => a + b, 0) / scheduleSeconds.length;

    const averageTime = dayjsToTime(baseTime.add(averageSeconds, 'seconds'));

    return averageTime;
  }

  static async averageSleepDuration() {
    const sleepSchedules = await SleepScheduleService.getCompleted();

    const durations = sleepSchedules.map((schedule) => {
      const sleepTime = dateTimeToDayjs(schedule.sleepTime);
      const wakeTime = dateTimeToDayjs(schedule.optimalWakeTime);

      const duration = Math.abs(wakeTime.diff(sleepTime, 'seconds'));

      return duration;
    });

    const averageDuration =
      durations.reduce((a, b) => a + b, 0) / durations.length;

    const averageDurationHrs = averageDuration / 60 / 60; // convert to hours

    return `${averageDurationHrs} hrs`;
  }

  static async averageAlarmStops() {
    const sleepSchedules = await db.sleepSchedule.findMany({
      where: {
        completed: true,
      },
      include: {
        alarmStops: true,
      },
    });

    const stops = sleepSchedules.map((schedule) => {
      return schedule.alarmStops.length;
    });

    const averageStops = stops.reduce((a, b) => a + b, 0) / stops.length;

    return averageStops;
  }
}
