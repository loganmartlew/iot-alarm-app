/*
  Warnings:

  - You are about to drop the column `calculatedWakeTime` on the `SleepSchedule` table. All the data in the column will be lost.
  - You are about to drop the column `timeTriggered` on the `SleepSchedule` table. All the data in the column will be lost.
  - Added the required column `optimalWakeTime` to the `SleepSchedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wakeTime` to the `SleepSchedule` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SleepSchedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "sleepTime" DATETIME NOT NULL,
    "wakeTime" DATETIME NOT NULL,
    "optimalWakeTime" DATETIME NOT NULL
);
INSERT INTO "new_SleepSchedule" ("createdAt", "id", "sleepTime", "updatedAt") SELECT "createdAt", "id", "sleepTime", "updatedAt" FROM "SleepSchedule";
DROP TABLE "SleepSchedule";
ALTER TABLE "new_SleepSchedule" RENAME TO "SleepSchedule";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
