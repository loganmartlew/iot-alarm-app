import { WakeTimeDTO } from '@iot-alarm-app/api';
import dayjs from 'dayjs';
import db from '../db';
import WeekDayService from './weekDay.service';

export default class WakeTimeService {
  static async getAll() {
    const wakeTimes = await db.wakeTime.findMany({
      include: {
        days: true,
      },
    });
    return wakeTimes;
  }

  static async create(wakeTimeData: WakeTimeDTO) {
    const weekDays = await Promise.all(
      wakeTimeData.days.map((day) => {
        return WeekDayService.getWeekDay(day);
      })
    );

    const newWakeTime = await db.wakeTime.create({
      data: {
        time: dayjs.utc(wakeTimeData.time).toDate(),
        days: {
          connect: weekDays.map((day) => ({ id: day.id })),
        },
      },
    });

    return newWakeTime;
  }
}
