-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SleepSchedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "sleepTime" TEXT NOT NULL,
    "wakeTime" TEXT NOT NULL,
    "optimalWakeTime" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_SleepSchedule" ("completed", "createdAt", "id", "optimalWakeTime", "sleepTime", "updatedAt", "wakeTime") SELECT "completed", "createdAt", "id", "optimalWakeTime", "sleepTime", "updatedAt", "wakeTime" FROM "SleepSchedule";
DROP TABLE "SleepSchedule";
ALTER TABLE "new_SleepSchedule" RENAME TO "SleepSchedule";
CREATE TABLE "new_WakeTime" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "time" TEXT NOT NULL
);
INSERT INTO "new_WakeTime" ("createdAt", "id", "time", "updatedAt") SELECT "createdAt", "id", "time", "updatedAt" FROM "WakeTime";
DROP TABLE "WakeTime";
ALTER TABLE "new_WakeTime" RENAME TO "WakeTime";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
