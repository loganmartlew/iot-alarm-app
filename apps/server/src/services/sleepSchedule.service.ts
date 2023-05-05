import { SleepScheduleDTO } from '@iot-alarm-app/api';
import dayjs from 'dayjs';
import db from '../db';

export default class SleepScheduleService {
  static async createSleepSchedule(sleepScheduleDto: SleepScheduleDTO) {
    const sleepSchedule = await db.sleepSchedule.create({
      data: {
        sleepTime: dayjs.utc(sleepScheduleDto.sleepTime).toDate(),
        wakeTime: dayjs.utc(sleepScheduleDto.wakeTime).toDate(),
        optimalWakeTime: dayjs.utc(sleepScheduleDto.optimalWakeTime).toDate(),
      },
    });

    return sleepSchedule;
  }
}
