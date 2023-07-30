/*
  Warnings:

  - Changed the type of `ratingId` on the `VatsimData` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `pilotRatingId` on the `VatsimData` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "VatsimData" DROP COLUMN "ratingId",
ADD COLUMN     "ratingId" INTEGER NOT NULL,
DROP COLUMN "pilotRatingId",
ADD COLUMN     "pilotRatingId" INTEGER NOT NULL;
