/*
  Warnings:

  - A unique constraint covering the columns `[cid]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `cid` VARCHAR(191) NOT NULL,
    ADD COLUMN `emailVerified` DATETIME(3) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_cid_key` ON `User`(`cid`);
