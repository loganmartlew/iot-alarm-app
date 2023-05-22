import { device } from '../loaders/iot';

export default class IOTService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async sendMessage(topic: string, data: any) {
    const message = JSON.stringify({ payload: data });

    device.publish(topic, message);
  }
}
