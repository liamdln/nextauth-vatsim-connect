-- AlterTable
ALTER TABLE "VatsimData" ALTER COLUMN "region" DROP NOT NULL,
ALTER COLUMN "regionId" DROP NOT NULL,
ALTER COLUMN "division" DROP NOT NULL,
ALTER COLUMN "divisionId" DROP NOT NULL;
