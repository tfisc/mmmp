-- CreateTable
CREATE TABLE "Shift" (
    "id" SERIAL NOT NULL,
    "day" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shift_pkey" PRIMARY KEY ("id")
);
