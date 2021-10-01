/*
  Warnings:

  - Added the required column `assuranceId` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "assuranceId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Assurance" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pictureUrl" TEXT NOT NULL,

    CONSTRAINT "Assurance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_assuranceId_fkey" FOREIGN KEY ("assuranceId") REFERENCES "Assurance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
