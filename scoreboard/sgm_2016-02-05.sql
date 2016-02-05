# ************************************************************
# Sequel Pro SQL dump
# Version 4499
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.36)
# Database: sgm
# Generation Time: 2016-02-05 16:33:19 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table scoreboard
# ------------------------------------------------------------

DROP TABLE IF EXISTS `scoreboard`;

CREATE TABLE `scoreboard` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `dm_name` varchar(30) NOT NULL,
  `team_name` varchar(40) NOT NULL,
  `score` int(10) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `dark-color` varchar(7) NOT NULL,
  `light-color` varchar(7) NOT NULL,
  `pool_b` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `scoreboard` WRITE;
/*!40000 ALTER TABLE `scoreboard` DISABLE KEYS */;

INSERT INTO `scoreboard` (`id`, `dm_name`, `team_name`, `score`, `logo`, `dark-color`, `light-color`, `pool_b`)
VALUES
	(1,'Baerwalds','Bears',50,'bears.png','#034d2f','#067c4c',0),
	(2,'Angers','Eagles',50,'eagles.png','#0096d4','#22beff',0),
	(3,'Bergens','Bison',20,'bison.png','#041E42','#033B7F',0),
	(4,'Austins','Attack',21,'attack.png','#bea884','#9b6e25',0),
	(5,'Phillips','Phoenix',50,'phil.png','#000000','#042FA8',0),
	(6,'Lappin-Fortins','Flyers',6,'flyers.png','#7c2336','#b52344',0),
	(7,'Conways','Carnivores',10,'carn.png','#bb7f32','#d7a15a',0),
	(8,'Johnsons','Jackals',80,'jack.png','#434380','#616198',0),
	(9,'Dekkers','Dragons',9,'dragons.png','#db3c26','#f15e4a',0),
	(10,'Reynolds','Rhinos',10,'rhinos.png','#2b3a53','#3c537d',0),
	(11,'Crouters','Cannibals',11,'cannibals.png','#231f20','#494949',0),
	(12,'Selfridges','Scorpions',12,'scorp.png','#f9d01a','#d8b311',0),
	(13,'Legomskis','Lumberjacks',10,'lumber.png','#6e4d29','#7b6246',1),
	(14,'Owens','Owls',14,'owls.png','#961a33','#ac3149',1),
	(15,'Van De Wals','Vipers',15,'vipers.png','#d91f2a','#fc4e58',1),
	(16,'Huethers','Hitmen',16,'hitmen.png','#2b3a53','#2051a4',1),
	(17,'Kotsopoulos','Cobras',7,'cobras.png','#fb640e','#f47932',1),
	(18,'Granges','Gladiators',30,'glad.png','#d62e26','#f1554e',1),
	(19,'Poelzers','PolarBears',31,'pbears.png','#ef747a','#3a4163',1),
	(20,'Bergs','Barracudas',100,'cudas.png','#1d355b','#2a759d',1),
	(21,'McColgans','Marauders',133,'mara.png','#ee3a43','#ef747a',1),
	(22,'De Souzas','Devils',34,'devils.png','#c42631','#cc5860',1),
	(23,'Toerings','Tigers',40,'tigers.png','#c26e00','#f7a539',1),
	(24,'Friesens','Fugitives',35,'fug.png','#264c2c','#3f7f49',1),
	(25,'Allens','Avengers',5,'avengers.png','#190C3D','#6D5AA3',1),
	(27,'Harbours','Huskies',18,'huskies.png','#bd342e','#ca5b56',1);

/*!40000 ALTER TABLE `scoreboard` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
