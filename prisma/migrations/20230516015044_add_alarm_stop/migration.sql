-- CreateTable
CREATE TABLE "AlarmStop" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "datetime" TEXT NOT NULL,
    "sleepScheduleId" TEXT NOT NULL,
    CONSTRAINT "AlarmStop_sleepScheduleId_fkey" FOREIGN KEY ("sleepScheduleId") REFERENCES "SleepSchedule" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
