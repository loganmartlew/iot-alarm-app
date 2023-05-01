import { WakeTimeDTO } from '@iot-alarm-app/api';
import db from '../db';

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
    const newWakeTime = await db.wakeTime.create({
      data: wakeTimeData,
    });
    return newWakeTime;
  }
}
