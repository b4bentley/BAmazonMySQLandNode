drop database Bamazon;

create database Bamazon;

use Bamazon;

create table 'Products' (
  `itemId` INT NOT NULL AUTO_INCREMENT,
  `productName` VARCHAR(45) NULL,
  'departmentName' VARCHAR(45) null,
  `price` DECIMAL(10,2) NULL,
  `stockQuantity` INT NULL,
  PRIMARY KEY (`id`)
);