/*
  Warnings:

  - Added the required column `label` to the `Click` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Click" ADD COLUMN     "label" TEXT NOT NULL;
