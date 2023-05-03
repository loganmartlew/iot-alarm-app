/*
  Warnings:

  - Added the required column `sleepTime` to the `SleepSchedule` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SleepSchedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "timeTriggered" DATETIME NOT NULL,
    "sleepTime" DATETIME NOT NULL,
    "calculatedWakeTime" DATETIME NOT NULL
);
INSERT INTO "new_SleepSchedule" ("calculatedWakeTime", "createdAt", "id", "timeTriggered", "updatedAt") SELECT "calculatedWakeTime", "createdAt", "id", "timeTriggered", "updatedAt" FROM "SleepSchedule";
DROP TABLE "SleepSchedule";
ALTER TABLE "new_SleepSchedule" RENAME TO "SleepSchedule";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
