-- CreateTable
CREATE TABLE "WakeTime" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "time" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "WeekDay" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_WakeTimeToWeekDay" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_WakeTimeToWeekDay_A_fkey" FOREIGN KEY ("A") REFERENCES "WakeTime" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_WakeTimeToWeekDay_B_fkey" FOREIGN KEY ("B") REFERENCES "WeekDay" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_WakeTimeToWeekDay_AB_unique" ON "_WakeTimeToWeekDay"("A", "B");

-- CreateIndex
CREATE INDEX "_WakeTimeToWeekDay_B_index" ON "_WakeTimeToWeekDay"("B");
