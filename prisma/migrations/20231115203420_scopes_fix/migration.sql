/*
  Warnings:

  - You are about to drop the column `scope` on the `account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `account` DROP COLUMN `scope`,
    ADD COLUMN `scopes` VARCHAR(191) NULL;
