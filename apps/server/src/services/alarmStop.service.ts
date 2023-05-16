import { AlarmStopDTO } from '@iot-alarm-app/api';
import db from '../db';

export default class AlarmService {
  static async createAlarmStop(alarmStopDto: AlarmStopDTO) {
    const alarmStop = await db.alarmStop.create({
      data: {
        datetime: alarmStopDto.timeStopped,
        sleepSchedule: {
          connect: {
            id: alarmStopDto.sleepScheduleId,
          },
        },
      },
    });

    return alarmStop;
  }
}
