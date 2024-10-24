/*
  Warnings:

  - The primary key for the `Participation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Participation` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Participation" DROP CONSTRAINT "Participation_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "course" SET DEFAULT 'default_course',
ADD CONSTRAINT "Participation_pkey" PRIMARY KEY ("id");
