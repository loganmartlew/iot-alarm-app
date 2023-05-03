import { SleepScheduleDTO } from '@iot-alarm-app/api';
import dayjs from 'dayjs';
import db from '../db';

export default class SleepScheduleService {
  static async createSleepSchedule(sleepScheduleDto: SleepScheduleDTO) {
    const sleepSchedule = await db.sleepSchedule.create({
      data: {
        sleepTime: dayjs(sleepScheduleDto.sleepTime).toDate(),
        wakeTime: dayjs(sleepScheduleDto.wakeTime).toDate(),
        optimalWakeTime: dayjs(sleepScheduleDto.optimalWakeTime).toDate(),
      },
    });

    return sleepSchedule;
  }
}
