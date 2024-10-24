/*
  Warnings:

  - Added the required column `step` to the `Participation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Participation" ADD COLUMN     "step" INTEGER NOT NULL;
