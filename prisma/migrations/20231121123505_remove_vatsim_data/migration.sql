/*
  Warnings:

  - You are about to drop the column `lastLogin` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `vatsimdata` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `vatsimdata` DROP FOREIGN KEY `VatsimData_cid_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `lastLogin`;

-- DropTable
DROP TABLE `vatsimdata`;
