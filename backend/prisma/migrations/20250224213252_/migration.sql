/*
  Warnings:

  - You are about to drop the column `livredAt` on the `delivery` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `delivery` DROP COLUMN `livredAt`,
    ADD COLUMN `livredAtClient` DATETIME(3) NULL,
    ADD COLUMN `livredAtCond` DATETIME(3) NULL;
