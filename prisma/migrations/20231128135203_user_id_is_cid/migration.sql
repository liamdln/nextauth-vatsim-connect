/*
  Warnings:

  - You are about to drop the column `cid` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_cid_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `cid`,
    DROP COLUMN `image`;
