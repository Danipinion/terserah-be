-- CreateTable
CREATE TABLE "Reviews" (
    "id" SERIAL NOT NULL,
    "stars" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);
