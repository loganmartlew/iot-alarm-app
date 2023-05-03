import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  for (const day of days) {
    await prisma.weekDay.create({
      data: {
        name: day,
        systemName: day.toLowerCase(),
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
