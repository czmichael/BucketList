SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

DROP SCHEMA IF EXISTS `bucket_list` ;
CREATE SCHEMA IF NOT EXISTS `bucket_list` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `bucket_list` ;

-- -----------------------------------------------------
-- Table `bucket_list`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bucket_list`.`user` ;

CREATE TABLE IF NOT EXISTS `bucket_list`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(45) NULL,
  `name` VARCHAR(255) NULL,
  `log_in` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
