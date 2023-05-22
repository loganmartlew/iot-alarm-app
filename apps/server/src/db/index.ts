import { PrismaClient } from '@prisma/client';
import { PrismaClientOptions } from '@prisma/client/runtime';

const options: PrismaClientOptions =
  process.env.NODE_ENV === 'production'
    ? {}
    : {
        datasources: {
          db: {
            url: 'postgres://root:password@localhost:2347/iotalarm?schema=public',
          },
        },
      };

const db = new PrismaClient();

export default db;
