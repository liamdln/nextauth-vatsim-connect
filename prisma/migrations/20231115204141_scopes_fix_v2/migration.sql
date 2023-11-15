/*
  Warnings:

  - Made the column `scopes` on table `account` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `account` MODIFY `scopes` JSON NOT NULL;
