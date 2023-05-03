/*
  Warnings:

  - Added the required column `systemName` to the `WeekDay` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WeekDay" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "systemName" TEXT NOT NULL
);
INSERT INTO "new_WeekDay" ("createdAt", "id", "name", "updatedAt") SELECT "createdAt", "id", "name", "updatedAt" FROM "WeekDay";
DROP TABLE "WeekDay";
ALTER TABLE "new_WeekDay" RENAME TO "WeekDay";
CREATE UNIQUE INDEX "WeekDay_systemName_key" ON "WeekDay"("systemName");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
