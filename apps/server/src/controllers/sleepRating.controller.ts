import { CreateSleepRating } from '@iot-alarm-app/api';
import { sleepRatingSchema } from '@iot-alarm-app/validation';
import { StatusCodes } from 'http-status-codes';
import SleepRatingService from '../services/sleepRating.service';

export const createSleepRating: CreateSleepRating = async (req) => {
  const sleepRatingDto = sleepRatingSchema.parse(req.body);

  const sleepRating = await SleepRatingService.create(sleepRatingDto);

  return {
    status: StatusCodes.CREATED,
    message: 'Sleep rating created',
    data: sleepRating,
  };
};
