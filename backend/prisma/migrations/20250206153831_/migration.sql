-- AlterTable
ALTER TABLE `user` ADD COLUMN `otpForgetExpiry` DATETIME(3) NULL,
    ADD COLUMN `otpForgetPass` VARCHAR(191) NULL;
