-- DropForeignKey
ALTER TABLE "VatsimData" DROP CONSTRAINT "VatsimData_cid_fkey";

-- AddForeignKey
ALTER TABLE "VatsimData" ADD CONSTRAINT "VatsimData_cid_fkey" FOREIGN KEY ("cid") REFERENCES "User"("cid") ON DELETE CASCADE ON UPDATE CASCADE;
