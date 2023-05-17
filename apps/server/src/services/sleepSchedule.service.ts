import { SleepScheduleDTO } from '@iot-alarm-app/api';
import db from '../db';

export default class SleepScheduleService {
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

  static async getSleepSchedule(id: string) {
    const sleepSchedule = await db.sleepSchedule.findUnique({
      where: { id },
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
