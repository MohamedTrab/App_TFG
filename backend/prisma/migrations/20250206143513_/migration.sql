-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('CONDUCTEUR', 'RESPONSABLE') NOT NULL DEFAULT 'CONDUCTEUR';
