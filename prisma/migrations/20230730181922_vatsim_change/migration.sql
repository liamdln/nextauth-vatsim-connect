/*
  Warnings:

  - You are about to drop the column `lastUpdate` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "lastUpdate",
ALTER COLUMN "lastLogin" DROP NOT NULL;
