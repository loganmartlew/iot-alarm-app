import { ApiError } from '@iot-alarm-app/errors';
import db from '../db';

export type WeekDaySystemName =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export default class WeekDayService {
  static async getWeekDay(systemName: WeekDaySystemName) {
    const weekDay = await db.weekDay.findFirst({
      where: {
        systemName,
      },
    });

    if (!weekDay) {
      throw new ApiError(null, 3002, `Week day ${systemName} not found`);
    }

    return weekDay;
  }
}
