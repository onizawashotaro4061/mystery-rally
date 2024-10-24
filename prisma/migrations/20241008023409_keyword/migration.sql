/*
  Warnings:

  - You are about to drop the column `createdAt` on the `KeywordAttempt` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "KeywordAttempt" DROP COLUMN "createdAt",
ALTER COLUMN "attempts" DROP DEFAULT;
