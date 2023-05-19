import { SleepRatingDTO } from '@iot-alarm-app/api';
import db from '../db';

export default class SleepRatingService {
  static async create(sleepRatingDto: SleepRatingDTO) {
    const sleepRating = await db.sleepRating.create({
      data: {
        rating: sleepRatingDto.rating,
        sleepSchedule: {
          connect: {
            id: sleepRatingDto.sleepScheduleId,
          },
        },
      },
    });

    return sleepRating;
  }
}
