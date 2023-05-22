import { device as Device } from 'aws-iot-device-sdk';

export const device = new Device({
  clientId: 'alarm-webserver',
  host: process.env.AWS_HOST,
  port: +(process.env.AWS_PORT || 8883),
  privateKey: Buffer.from(process.env.AWS_KEY || ''),
  clientCert: Buffer.from(process.env.AWS_CERT || ''),
  caCert: Buffer.from(process.env.AWS_CA || ''),
});
