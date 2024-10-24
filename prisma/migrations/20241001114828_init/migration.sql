/*
  Warnings:

  - You are about to drop the column `bannerId` on the `Click` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Click` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `Click` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Click" DROP COLUMN "bannerId",
DROP COLUMN "state",
DROP COLUMN "timestamp",
ADD COLUMN     "count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
