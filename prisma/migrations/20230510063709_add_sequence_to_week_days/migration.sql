-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WeekDay" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "systemName" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_WeekDay" ("createdAt", "id", "name", "systemName", "updatedAt") SELECT "createdAt", "id", "name", "systemName", "updatedAt" FROM "WeekDay";
DROP TABLE "WeekDay";
ALTER TABLE "new_WeekDay" RENAME TO "WeekDay";
CREATE UNIQUE INDEX "WeekDay_systemName_key" ON "WeekDay"("systemName");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
