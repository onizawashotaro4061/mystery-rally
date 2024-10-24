/*
  Warnings:

  - A unique constraint covering the columns `[label]` on the table `Click` will be added. If there are existing duplicate values, this will fail.
  - Made the column `label` on table `Click` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Click" ALTER COLUMN "label" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Click_label_key" ON "Click"("label");
