import { SleepScheduleDTO } from '@iot-alarm-app/api';
import { ApiError } from '@iot-alarm-app/errors';
import db from '../db';

export default class SleepScheduleService {
  static async getAll() {
    const sleepSchedules = await db.sleepSchedule.findMany();

    return sleepSchedules;
  }

  static async getOne(id: string) {
    const sleepSchedule = await db.sleepSchedule.findUnique({
      where: { id },
      include: {
        alarmStops: true,
      },
    });

    if (!sleepSchedule) {
      throw new ApiError(null, 3002, `Sleep schedule not found`);
    }

    return sleepSchedule;
  }

  static async getCompleted() {
    const sleepSchedules = await db.sleepSchedule.findMany({
      where: { completed: true },
    });

    return sleepSchedules;
  }

  static async createSleepSchedule(sleepScheduleDto: SleepScheduleDTO) {
    const sleepSchedule = await db.sleepSchedule.create({
      data: {
        sleepTime: sleepScheduleDto.sleepTime,
        wakeTime: sleepScheduleDto.wakeTime,
        optimalWakeTime: sleepScheduleDto.optimalWakeTime,
      },
    });

    return sleepSchedule;
  }

  static async completeSleepSchedule(id: string) {
    const sleepSchedule = await db.sleepSchedule.update({
      where: { id },
      data: { completed: true },
    });

    return sleepSchedule;
  }
}
