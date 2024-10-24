-- AlterTable
ALTER TABLE "Click" ALTER COLUMN "course" SET DEFAULT 'default_course';

-- AlterTable
ALTER TABLE "KeywordAttempt" ALTER COLUMN "course" SET DEFAULT 'default_course';

-- CreateTable
CREATE TABLE "Participation" (
    "id" SERIAL NOT NULL,
    "course" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Participation_pkey" PRIMARY KEY ("id")
);
