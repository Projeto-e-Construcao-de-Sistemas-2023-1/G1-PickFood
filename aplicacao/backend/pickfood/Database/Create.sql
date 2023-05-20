-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(90) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cliente` (
  `user` INT NOT NULL,
  `nome` VARCHAR(90) NOT NULL,
  `cpf` VARCHAR(11) NOT NULL,
  `telefone` VARCHAR(11) NOT NULL,
  PRIMARY KEY (`user`),
  CONSTRAINT `fk_user_cliente`
    FOREIGN KEY (`user`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`endereco` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `rua` VARCHAR(45) NOT NULL,
  `cep` VARCHAR(45) NOT NULL,
  `numero` INT NOT NULL,
  `complemento` VARCHAR(45) NULL,
  `bairro` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`restaurante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`restaurante` (
  `user` INT NOT NULL,
  `nome_fantasia` VARCHAR(45) NOT NULL,
  `cnpj` VARCHAR(45) NOT NULL,
  `horario_abertura` TIME NOT NULL,
  `horario_fechamento` TIME NOT NULL,
  `taxa_entrega` DECIMAL(2,2) NOT NULL,
  `endereco` INT NOT NULL,
  PRIMARY KEY (`user`),
  INDEX `fk_endereco_restaurante_idx` (`endereco` ASC) VISIBLE,
  CONSTRAINT `fk_user_restaurante`
    FOREIGN KEY (`user`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_endereco_restaurante`
    FOREIGN KEY (`endereco`)
    REFERENCES `mydb`.`endereco` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`endereco_cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`endereco_cliente` (
  `endereco` INT NOT NULL,
  `cliente` INT NOT NULL,
  INDEX `fk_endereco_endereco_cliente_idx` (`endereco` ASC) VISIBLE,
  INDEX `fk_cliente_endereco_cliente_idx` (`cliente` ASC) VISIBLE,
  CONSTRAINT `fk_endereco_endereco_cliente`
    FOREIGN KEY (`endereco`)
    REFERENCES `mydb`.`endereco` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cliente_endereco_cliente`
    FOREIGN KEY (`cliente`)
    REFERENCES `mydb`.`cliente` (`user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`item` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `preco` DECIMAL(5,2) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  `restaurante` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_restaurante_item_idx` (`restaurante` ASC) VISIBLE,
  CONSTRAINT `fk_restaurante_item`
    FOREIGN KEY (`restaurante`)
    REFERENCES `mydb`.`restaurante` (`user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pedido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `valor_total` DECIMAL(6,2) NOT NULL,
  `data` DATETIME NOT NULL,
  `status_pedido` VARCHAR(45) NOT NULL,
  `forma_de_pagamento` VARCHAR(45) NOT NULL,
  `cliente` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cliente_pedido_idx` (`cliente` ASC) VISIBLE,
  CONSTRAINT `fk_cliente_pedido`
    FOREIGN KEY (`cliente`)
    REFERENCES `mydb`.`cliente` (`user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`item_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`item_pedido` (
  `pedido` INT NOT NULL,
  `item` INT NOT NULL,
  `quantidade` INT NOT NULL,
  `valor` DECIMAL(5,2) NOT NULL,
  INDEX `fk_pedido_item_pedido_idx` (`pedido` ASC) VISIBLE,
  INDEX `fk_item_item_pedido_idx` (`item` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_item_pedido`
    FOREIGN KEY (`pedido`)
    REFERENCES `mydb`.`pedido` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_item_item_pedido`
    FOREIGN KEY (`item`)
    REFERENCES `mydb`.`item` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categoria` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`restaurante_categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`restaurante_categoria` (
  `restaurante` INT NOT NULL,
  `categoria` INT NOT NULL,
  INDEX `fk_categoria_restaurante_categoria_idx` (`categoria` ASC) VISIBLE,
  INDEX `fk_restaurante_categoria_restaurante_idx` (`restaurante` ASC) VISIBLE,
  CONSTRAINT `fk_categoria_restaurante_categoria`
    FOREIGN KEY (`categoria`)
    REFERENCES `mydb`.`categoria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_restaurante_categoria_restaurante`
    FOREIGN KEY (`restaurante`)
    REFERENCES `mydb`.`restaurante` (`user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
