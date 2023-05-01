import { Express } from 'express';
import dotenvLoader from './dotenv';
import expressLoader from './express';
import loggerLoader, { Logger } from './logger';

export default async (app: Express) => {
  await loggerLoader(app);
  Logger.info('HTTP logger loaded');

  await dotenvLoader();
  Logger.info('Environment variables loaded');

  await expressLoader(app);
  Logger.info('Express app loaded and configured');
};
