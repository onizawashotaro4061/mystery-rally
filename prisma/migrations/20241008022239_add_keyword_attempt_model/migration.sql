-- CreateTable
CREATE TABLE "KeywordAttempt" (
    "id" SERIAL NOT NULL,
    "course" TEXT NOT NULL,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KeywordAttempt_pkey" PRIMARY KEY ("id")
);
