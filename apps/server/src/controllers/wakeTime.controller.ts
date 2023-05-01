import { GetWakeTimes } from '@iot-alarm-app/api';

export const getWakeTimes: GetWakeTimes = async (req, res) => {
  return {
    status: 200,
    message: 'Hello World',
    data: 'Hello World',
  };
};
