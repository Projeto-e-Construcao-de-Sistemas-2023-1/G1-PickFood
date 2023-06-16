-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
  `cpf` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  `user` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK53p7heiijrywpk2okr7s44ukw` (`user`),
  CONSTRAINT `FK53p7heiijrywpk2okr7s44ukw` FOREIGN KEY (`user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente_endereco`
--

DROP TABLE IF EXISTS `cliente_endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente_endereco` (
  `cliente_id` int NOT NULL,
  `endereco_id` int NOT NULL,
  UNIQUE KEY `UK_eaijuk6dr5awjv26fvex140lv` (`endereco_id`),
  KEY `FKb9adyf983n50qn4gqcsuocelc` (`cliente_id`),
  CONSTRAINT `FKb9adyf983n50qn4gqcsuocelc` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`),
  CONSTRAINT `FKkaig3neffesoery8mnkive5bq` FOREIGN KEY (`endereco_id`) REFERENCES `endereco` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente_endereco`
--

LOCK TABLES `cliente_endereco` WRITE;
/*!40000 ALTER TABLE `cliente_endereco` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente_endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente_pedidos`
--

DROP TABLE IF EXISTS `cliente_pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente_pedidos` (
  `cliente_id` int NOT NULL,
  `pedidos_id` int NOT NULL,
  UNIQUE KEY `UK_5ghbygu6ffc8sd7dnlxud5mox` (`pedidos_id`),
  KEY `FK3fiiwebwnib50do1jwwdtp2gv` (`cliente_id`),
  CONSTRAINT `FK3fiiwebwnib50do1jwwdtp2gv` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`),
  CONSTRAINT `FKprs510oqt9komm63bt9hqn6g` FOREIGN KEY (`pedidos_id`) REFERENCES `pedido` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente_pedidos`
--

LOCK TABLES `cliente_pedidos` WRITE;
/*!40000 ALTER TABLE `cliente_pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente_pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endereco` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bairro` varchar(255) DEFAULT NULL,
  `cep` varchar(255) DEFAULT NULL,
  `complemento` varchar(255) DEFAULT NULL,
  `numero` int DEFAULT NULL,
  `rua` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
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
  CONSTRAINT `fk_cliente_endereco_cliente` FOREIGN KEY (`cliente`) REFERENCES `cliente` (`user`),
  CONSTRAINT `fk_endereco_endereco_cliente` FOREIGN KEY (`endereco`) REFERENCES `endereco` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco_cliente`
--

LOCK TABLES `endereco_cliente` WRITE;
/*!40000 ALTER TABLE `endereco_cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `endereco_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritos_prato`
--

DROP TABLE IF EXISTS `favoritos_prato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoritos_prato` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente` int DEFAULT NULL,
  `item` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKfcdpte6rwec6fvdyuquudvhte` (`cliente`),
  KEY `FK104wfym8fe2ii7vkbyp74v718` (`item`),
  CONSTRAINT `FK104wfym8fe2ii7vkbyp74v718` FOREIGN KEY (`item`) REFERENCES `item` (`id`),
  CONSTRAINT `FKfcdpte6rwec6fvdyuquudvhte` FOREIGN KEY (`cliente`) REFERENCES `cliente` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritos_prato`
--

LOCK TABLES `favoritos_prato` WRITE;
/*!40000 ALTER TABLE `favoritos_prato` DISABLE KEYS */;
/*!40000 ALTER TABLE `favoritos_prato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritos_restaurante`
--

DROP TABLE IF EXISTS `favoritos_restaurante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoritos_restaurante` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente` int DEFAULT NULL,
  `restaurante` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK4diagos7kl6n6c5anq54du1q8` (`cliente`),
  KEY `FKp0f9hvgtw99x528ym32ubkdgs` (`restaurante`),
  CONSTRAINT `FK4diagos7kl6n6c5anq54du1q8` FOREIGN KEY (`cliente`) REFERENCES `cliente` (`id`),
  CONSTRAINT `FKp0f9hvgtw99x528ym32ubkdgs` FOREIGN KEY (`restaurante`) REFERENCES `restaurante` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritos_restaurante`
--

LOCK TABLES `favoritos_restaurante` WRITE;
/*!40000 ALTER TABLE `favoritos_restaurante` DISABLE KEYS */;
/*!40000 ALTER TABLE `favoritos_restaurante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingrediente_alergenico`
--

DROP TABLE IF EXISTS `ingrediente_alergenico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingrediente_alergenico` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingrediente_alergenico`
--

LOCK TABLES `ingrediente_alergenico` WRITE;
/*!40000 ALTER TABLE `ingrediente_alergenico` DISABLE KEYS */;
/*!40000 ALTER TABLE `ingrediente_alergenico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `preco` float DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `restaurante` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKkj3hvuuotq7sv0hp7pxfvfmii` (`restaurante`),
  CONSTRAINT `FKkj3hvuuotq7sv0hp7pxfvfmii` FOREIGN KEY (`restaurante`) REFERENCES `restaurante` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_pedido`
--

LOCK TABLES `item_pedido` WRITE;
/*!40000 ALTER TABLE `item_pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_restricao`
--

DROP TABLE IF EXISTS `item_restricao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_restricao` (
  `item` int NOT NULL,
  `restricao` int NOT NULL,
  KEY `fk_restricao_item_restricao_idx` (`restricao`),
  KEY `fk_item_restricao_item_idx` (`item`),
  CONSTRAINT `fk_item_restricao_item` FOREIGN KEY (`item`) REFERENCES `item` (`id`),
  CONSTRAINT `fk_restricao_item_restricao` FOREIGN KEY (`restricao`) REFERENCES `restricao` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_restricao`
--

LOCK TABLES `item_restricao` WRITE;
/*!40000 ALTER TABLE `item_restricao` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_restricao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data` datetime(6) DEFAULT NULL,
  `forma_pagamento` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `valor_total` float DEFAULT NULL,
  `cliente` int DEFAULT NULL,
  `restaurante` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3n7g0gf9fttq3pr3rqa76gg54` (`cliente`),
  KEY `FKnamwd41q2spnkg50v613de4gd` (`restaurante`),
  CONSTRAINT `FK3n7g0gf9fttq3pr3rqa76gg54` FOREIGN KEY (`cliente`) REFERENCES `cliente` (`id`),
  CONSTRAINT `FKnamwd41q2spnkg50v613de4gd` FOREIGN KEY (`restaurante`) REFERENCES `restaurante` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido_item_pedido_list`
--

DROP TABLE IF EXISTS `pedido_item_pedido_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido_item_pedido_list` (
  `pedido_id` int NOT NULL,
  `item_pedido_list_id` int NOT NULL,
  UNIQUE KEY `UK_5h5i7eeg3a42xeiu39cystr8o` (`item_pedido_list_id`),
  KEY `FKd2t3m6qaljp1r3ub2o11pnilx` (`pedido_id`),
  CONSTRAINT `FKd2t3m6qaljp1r3ub2o11pnilx` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`id`),
  CONSTRAINT `FKopltohto7hi5up311ocftkcsr` FOREIGN KEY (`item_pedido_list_id`) REFERENCES `favoritos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_item_pedido_list`
--

LOCK TABLES `pedido_item_pedido_list` WRITE;
/*!40000 ALTER TABLE `pedido_item_pedido_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido_item_pedido_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurante`
--

DROP TABLE IF EXISTS `restaurante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurante` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cnpj` varchar(255) DEFAULT NULL,
  `horario_abertura` time DEFAULT NULL,
  `horario_fechamento` time DEFAULT NULL,
  `nome_fantasia` varchar(255) DEFAULT NULL,
  `razao_social` varchar(255) DEFAULT NULL,
  `taxa_entrega` double DEFAULT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  `endereco` int DEFAULT NULL,
  `user` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKf9myap2e002r6lt2hak5qmgvx` (`endereco`),
  KEY `FKlfh60vht8d02tlqqd6lshajsl` (`user`),
  CONSTRAINT `FKf9myap2e002r6lt2hak5qmgvx` FOREIGN KEY (`endereco`) REFERENCES `endereco` (`id`),
  CONSTRAINT `FKlfh60vht8d02tlqqd6lshajsl` FOREIGN KEY (`user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurante`
--

LOCK TABLES `restaurante` WRITE;
/*!40000 ALTER TABLE `restaurante` DISABLE KEYS */;
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
  KEY `fk_restaurante_categoria_restaurante_idx` (`restaurante`),
  CONSTRAINT `fk_categoria_restaurante_categoria` FOREIGN KEY (`categoria`) REFERENCES `categoria` (`id`),
  CONSTRAINT `fk_restaurante_categoria_restaurante` FOREIGN KEY (`restaurante`) REFERENCES `restaurante` (`user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurante_categoria`
--

LOCK TABLES `restaurante_categoria` WRITE;
/*!40000 ALTER TABLE `restaurante_categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `restaurante_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurante_ingrediente_alergenico`
--

DROP TABLE IF EXISTS `restaurante_ingrediente_alergenico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurante_ingrediente_alergenico` (
  `restaurante` int NOT NULL,
  `ingrediente_alergenico` int NOT NULL,
  KEY `fk_ingrediente_alergenico_restaurante_ingrediente_alergenico_idx` (`ingrediente_alergenico`),
  KEY `fk_restaurante_ingrediente_alergenico_restaurante_idx` (`restaurante`),
  CONSTRAINT `fk_ingrediente_alergenico_restaurante_ingrediente_alergenico` FOREIGN KEY (`ingrediente_alergenico`) REFERENCES `ingrediente_alergenico` (`id`),
  CONSTRAINT `fk_restaurante_ingrediente_alergenico_restaurante` FOREIGN KEY (`restaurante`) REFERENCES `restaurante` (`user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurante_ingrediente_alergenico`
--

LOCK TABLES `restaurante_ingrediente_alergenico` WRITE;
/*!40000 ALTER TABLE `restaurante_ingrediente_alergenico` DISABLE KEYS */;
/*!40000 ALTER TABLE `restaurante_ingrediente_alergenico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restricao`
--

DROP TABLE IF EXISTS `restricao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restricao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restricao`
--

LOCK TABLES `restricao` WRITE;
/*!40000 ALTER TABLE `restricao` DISABLE KEYS */;
/*!40000 ALTER TABLE `restricao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'mydb'
--

--
-- Dumping routines for database 'mydb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-15 22:37:07
