/*
  Warnings:

  - You are about to drop the `KeywordAttempt` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "KeywordAttempt";

-- CreateTable
CREATE TABLE "Clicks" (
    "id" SERIAL NOT NULL,
    "course" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Clicks_pkey" PRIMARY KEY ("id")
);
