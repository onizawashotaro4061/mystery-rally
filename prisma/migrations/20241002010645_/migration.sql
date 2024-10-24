/*
  Warnings:

  - You are about to drop the `Button` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Button";

-- CreateTable
CREATE TABLE "Click" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Click_pkey" PRIMARY KEY ("id")
);
