/*
  Warnings:

  - The primary key for the `Participation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Participation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Participation" DROP CONSTRAINT "Participation_pkey",
DROP COLUMN "createdAt",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Participation_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Participation_id_seq";
