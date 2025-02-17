-- DropForeignKey
ALTER TABLE `delivery` DROP FOREIGN KEY `Delivery_truckId_fkey`;

-- DropIndex
DROP INDEX `Delivery_truckId_fkey` ON `delivery`;

-- AddForeignKey
ALTER TABLE `Delivery` ADD CONSTRAINT `Delivery_truckId_fkey` FOREIGN KEY (`truckId`) REFERENCES `Truck`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
