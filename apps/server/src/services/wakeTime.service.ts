import { WakeTimeDTO } from '@iot-alarm-app/api';
import { ApiError } from '@iot-alarm-app/errors';
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

  static async getOne(id: string) {
    const wakeTime = await db.wakeTime.findUnique({
      where: {
        id,
      },
      include: {
        days: true,
      },
    });

    if (!wakeTime) {
      throw new ApiError(null, 3002, `Wake time not found`);
    }

    return wakeTime;
  }

  static async create(wakeTimeData: WakeTimeDTO) {
    const weekDays = await Promise.all(
      wakeTimeData.days.map((day) => {
        return WeekDayService.getWeekDay(day);
      })
    );

    const newWakeTime = await db.wakeTime.create({
      data: {
        time: wakeTimeData.time,
        days: {
          connect: weekDays.map((day) => ({ id: day.id })),
        },
      },
    });

    return newWakeTime;
  }

  static async update(id: string, wakeTimeData: WakeTimeDTO) {
    const weekDays = await Promise.all(
      wakeTimeData.days.map((day) => {
        return WeekDayService.getWeekDay(day);
      })
    );

    // Remove existing day relations
    const existingWakeTime = await db.wakeTime.findUnique({
      where: {
        id,
      },
      include: {
        days: true,
      },
    });

    const updatedWakeTime = await db.wakeTime.update({
      where: {
        id,
      },
      include: {
        days: true,
      },
      data: {
        time: wakeTimeData.time,
        days: {
          disconnect: existingWakeTime?.days.map((day) => ({ id: day.id })),
          connect: weekDays.map((day) => ({ id: day.id })),
        },
      },
    });

    if (!updatedWakeTime) {
      throw new ApiError(null, 3002, `Wake time not found`);
    }

    return updatedWakeTime;
  }
}
