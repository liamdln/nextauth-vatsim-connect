/*
  Warnings:

  - You are about to drop the `VATSIMData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "VATSIMData" DROP CONSTRAINT "VATSIMData_cid_fkey";

-- DropTable
DROP TABLE "VATSIMData";

-- CreateTable
CREATE TABLE "VatsimData" (
    "cid" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "divisionId" TEXT NOT NULL,
    "subDivision" TEXT,
    "subDivisionId" TEXT,
    "ratingLong" TEXT NOT NULL,
    "ratingShort" TEXT NOT NULL,
    "ratingId" TEXT NOT NULL,
    "pilotRatingLong" TEXT NOT NULL,
    "pilotRatingShort" TEXT NOT NULL,
    "pilotRatingId" TEXT NOT NULL,

    CONSTRAINT "VatsimData_pkey" PRIMARY KEY ("cid")
);

-- AddForeignKey
ALTER TABLE "VatsimData" ADD CONSTRAINT "VatsimData_cid_fkey" FOREIGN KEY ("cid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
