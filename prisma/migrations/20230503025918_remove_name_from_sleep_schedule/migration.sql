/*
  Warnings:

  - You are about to drop the column `name` on the `SleepSchedule` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SleepSchedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "timeTriggered" DATETIME NOT NULL,
    "calculatedWakeTime" DATETIME NOT NULL
);
INSERT INTO "new_SleepSchedule" ("calculatedWakeTime", "createdAt", "id", "timeTriggered", "updatedAt") SELECT "calculatedWakeTime", "createdAt", "id", "timeTriggered", "updatedAt" FROM "SleepSchedule";
DROP TABLE "SleepSchedule";
ALTER TABLE "new_SleepSchedule" RENAME TO "SleepSchedule";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
