-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SleepSchedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "sleepTime" DATETIME NOT NULL,
    "wakeTime" DATETIME NOT NULL,
    "optimalWakeTime" DATETIME NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_SleepSchedule" ("createdAt", "id", "optimalWakeTime", "sleepTime", "updatedAt", "wakeTime") SELECT "createdAt", "id", "optimalWakeTime", "sleepTime", "updatedAt", "wakeTime" FROM "SleepSchedule";
DROP TABLE "SleepSchedule";
ALTER TABLE "new_SleepSchedule" RENAME TO "SleepSchedule";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
