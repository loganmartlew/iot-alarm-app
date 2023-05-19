-- AlterTable
ALTER TABLE "SleepSchedule" ADD COLUMN "sleepRatingId" TEXT;

-- CreateTable
CREATE TABLE "SleepRating" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "rating" INTEGER NOT NULL,
    "sleepScheduleId" TEXT NOT NULL,
    CONSTRAINT "SleepRating_sleepScheduleId_fkey" FOREIGN KEY ("sleepScheduleId") REFERENCES "SleepSchedule" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "SleepRating_sleepScheduleId_key" ON "SleepRating"("sleepScheduleId");
