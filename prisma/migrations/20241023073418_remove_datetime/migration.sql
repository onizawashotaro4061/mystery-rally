-- CreateTable
CREATE TABLE "ClickCounts" (
    "id" SERIAL NOT NULL,
    "course" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "correctClick" BOOLEAN NOT NULL,

    CONSTRAINT "ClickCounts_pkey" PRIMARY KEY ("id")
);
