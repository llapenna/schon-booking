-- CreateTable
CREATE TABLE "Person" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "photo" TEXT
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "notes" TEXT
);

-- CreateTable
CREATE TABLE "_PersonToReservation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PersonToReservation_A_fkey" FOREIGN KEY ("A") REFERENCES "Person" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PersonToReservation_B_fkey" FOREIGN KEY ("B") REFERENCES "Reservation" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_PersonToReservation_AB_unique" ON "_PersonToReservation"("A", "B");

-- CreateIndex
CREATE INDEX "_PersonToReservation_B_index" ON "_PersonToReservation"("B");
