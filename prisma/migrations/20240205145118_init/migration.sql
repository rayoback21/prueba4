-- CreateTable
CREATE TABLE "Activiti" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "lastSee" TEXT NOT NULL,
    "countLastSee" INTEGER NOT NULL DEFAULT 1,
    "exint" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Activiti_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Activiti_title_key" ON "Activiti"("title");
