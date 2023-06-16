-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` int NOT NULL,
  `nome` varchar(90) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `telefone` varchar(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_cliente_idx` (`user`),
  CONSTRAINT `fk_user_cliente` FOREIGN KEY (`user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endereco` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rua` varchar(45) NOT NULL,
  `cep` varchar(45) NOT NULL,
  `numero` int NOT NULL,
  `complemento` varchar(45) DEFAULT NULL,
  `bairro` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` VALUES (4,'dos bobos','123456',12,'nao tem','mirandopolis'),(5,'dos bobos','123456',12,'nao tem','mirandopolis');
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endereco_cliente`
--

DROP TABLE IF EXISTS `endereco_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endereco_cliente` (
  `endereco` int NOT NULL,
  `cliente` int NOT NULL,
  KEY `fk_endereco_endereco_cliente_idx` (`endereco`),
  KEY `fk_cliente_endereco_cliente_idx` (`cliente`),
  CONSTRAINT `fk_cliente_endereco_cliente` FOREIGN KEY (`cliente`) REFERENCES `cliente` (`id`),
  CONSTRAINT `fk_endereco_endereco_cliente` FOREIGN KEY (`endereco`) REFERENCES `endereco` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco_cliente`
--

LOCK TABLES `endereco_cliente` WRITE;
/*!40000 ALTER TABLE `endereco_cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `endereco_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `preco` decimal(5,2) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `tipo` varchar(45) NOT NULL,
  `descricao` varchar(45) NOT NULL,
  `restaurante` int NOT NULL,
  `foto` blob,
  PRIMARY KEY (`id`),
  KEY `fk_restaurante_item_idx` (`restaurante`),
  CONSTRAINT `fk_restaurante_item` FOREIGN KEY (`restaurante`) REFERENCES `restaurante` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_pedido`
--

DROP TABLE IF EXISTS `item_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_pedido` (
  `pedido` int NOT NULL,
  `item` int NOT NULL,
  `quantidade` int NOT NULL,
  `valor` decimal(5,2) NOT NULL,
  KEY `fk_pedido_item_pedido_idx` (`pedido`),
  KEY `fk_item_item_pedido_idx` (`item`),
  CONSTRAINT `fk_item_item_pedido` FOREIGN KEY (`item`) REFERENCES `item` (`id`),
  CONSTRAINT `fk_pedido_item_pedido` FOREIGN KEY (`pedido`) REFERENCES `pedido` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_pedido`
--

LOCK TABLES `item_pedido` WRITE;
/*!40000 ALTER TABLE `item_pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `valor_total` decimal(6,2) NOT NULL,
  `data` datetime NOT NULL,
  `status_pedido` varchar(45) NOT NULL,
  `forma_de_pagamento` varchar(45) NOT NULL,
  `cliente` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cliente_pedido_idx` (`cliente`),
  CONSTRAINT `fk_cliente_pedido` FOREIGN KEY (`cliente`) REFERENCES `cliente` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurante`
--

DROP TABLE IF EXISTS `restaurante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurante` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` int NOT NULL,
  `nome_fantasia` varchar(45) NOT NULL,
  `cnpj` varchar(45) NOT NULL,
  `horario_abertura` time NOT NULL,
  `horario_fechamento` time NOT NULL,
  `taxa_entrega` double NOT NULL,
  `endereco` int NOT NULL,
  `razao_social` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_endereco_restaurante_idx` (`endereco`),
  CONSTRAINT `fk_endereco_restaurante` FOREIGN KEY (`endereco`) REFERENCES `endereco` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurante`
--

LOCK TABLES `restaurante` WRITE;
/*!40000 ALTER TABLE `restaurante` DISABLE KEYS */;
INSERT INTO `restaurante` VALUES (2,1,'teste','11111122','11:00:00','00:00:00',10.5,5,'teste.ltda');
/*!40000 ALTER TABLE `restaurante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurante_categoria`
--

DROP TABLE IF EXISTS `restaurante_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurante_categoria` (
  `restaurante` int NOT NULL,
  `categoria` int NOT NULL,
  KEY `fk_categoria_restaurante_categoria_idx` (`categoria`),
  KEY `fk_restaurante_restaurante_categoria_idx` (`restaurante`),
  CONSTRAINT `fk_categoria_restaurante_categoria` FOREIGN KEY (`categoria`) REFERENCES `categoria` (`id`),
  CONSTRAINT `fk_restaurante_restaurante_categoria` FOREIGN KEY (`restaurante`) REFERENCES `restaurante` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurante_categoria`
--

LOCK TABLES `restaurante_categoria` WRITE;
/*!40000 ALTER TABLE `restaurante_categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `restaurante_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(90) NOT NULL,
  `senha` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

CREATE TABLE `mydb`.`restaurante_ingrediente_alergenico` (
  `ingrediente_alergenico` INT NOT NULL,
  `restaurante` INT NOT NULL,
  INDEX `fk_ingrediente_alergenico_restaurante_ingrediente_alergenic_idx` (`ingrediente_alergenico` ASC) VISIBLE,
  INDEX `fk_restaurante_restaurante_ingrediente_alergenico_idx` (`restaurante` ASC) VISIBLE,
  CONSTRAINT `fk_restaurante_restaurante_ingrediente_alergenico`
    FOREIGN KEY (`restaurante`)
    REFERENCES `mydb`.`restaurante` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ingrediente_alergenico_restaurante_ingrediente_alergenico`
    FOREIGN KEY (`ingrediente_alergenico`)
    REFERENCES `mydb`.`ingrediente_alergenico` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'teste','teste');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-23 20:29:22
