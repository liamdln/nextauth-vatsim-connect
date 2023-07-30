/*
  Warnings:

  - The primary key for the `VatsimData` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[cid]` on the table `VatsimData` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "VatsimData" DROP CONSTRAINT "VatsimData_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "VatsimData_cid_key" ON "VatsimData"("cid");
