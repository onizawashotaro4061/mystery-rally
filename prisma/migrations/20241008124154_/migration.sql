/*
  Warnings:

  - You are about to drop the column `label` on the `Click` table. All the data in the column will be lost.
  - You are about to drop the `Clicks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `course` to the `Click` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Click_label_key";

-- AlterTable
ALTER TABLE "Click" DROP COLUMN "label",
ADD COLUMN     "course" TEXT NOT NULL;

-- DropTable
DROP TABLE "Clicks";

-- CreateTable
CREATE TABLE "KeywordAttempt" (
    "id" SERIAL NOT NULL,
    "course" TEXT NOT NULL,
    "step" INTEGER NOT NULL,
    "attempts" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "KeywordAttempt_pkey" PRIMARY KEY ("id")
);
