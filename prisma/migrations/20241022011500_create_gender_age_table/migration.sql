-- CreateTable
CREATE TABLE "GenderAge" (
    "id" SERIAL NOT NULL,
    "gender" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "GenderAge_pkey" PRIMARY KEY ("id")
);
