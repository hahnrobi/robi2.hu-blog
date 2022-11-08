/*
  Warnings:

  - Added the required column `categorySlug` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` ADD COLUMN `categorySlug` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `ArticleCategory` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ArticleCategory_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_categorySlug_fkey` FOREIGN KEY (`categorySlug`) REFERENCES `ArticleCategory`(`slug`) ON DELETE RESTRICT ON UPDATE CASCADE;
