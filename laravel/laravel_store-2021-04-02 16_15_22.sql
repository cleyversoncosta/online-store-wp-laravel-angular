-- --------------------------------------------------------
-- Servidor:                     localhost
-- Versão do servidor:           5.7.24 - MySQL Community Server (GPL)
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Copiando estrutura para tabela laravel_store.tbl_header_carousel
DROP TABLE IF EXISTS `tbl_header_carousel`;
CREATE TABLE IF NOT EXISTS `tbl_header_carousel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) DEFAULT NULL,
  `tipo` enum('mobile','desktop') DEFAULT NULL,
  `ativo` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela laravel_store.tbl_header_carousel: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `tbl_header_carousel` DISABLE KEYS */;
INSERT INTO `tbl_header_carousel` (`id`, `src`, `tipo`, `ativo`) VALUES
	(1, 'http://127.0.0.1:8000/images/header-carousel/desktop/2.jpg', 'desktop', 1),
	(2, 'http://127.0.0.1:8000/images/header-carousel/desktop/1.jpg', 'desktop', 1),
	(3, 'http://127.0.0.1:8000/images/header-carousel/mobile/336x280/1.png', 'mobile', 1);
/*!40000 ALTER TABLE `tbl_header_carousel` ENABLE KEYS */;

-- Copiando estrutura para tabela laravel_store.tbl_loja_settings
DROP TABLE IF EXISTS `tbl_loja_settings`;
CREATE TABLE IF NOT EXISTS `tbl_loja_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(50) DEFAULT NULL,
  `valor` varchar(100) DEFAULT NULL,
  `ativo` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1 COMMENT='frete-disponivel  \r\n>> frete-gratis\r\n>> frete-valor-minimo\r\n\r\nnewsletter-modal-trigger\r\n>> time\r\n>> scroll-perc';

-- Copiando dados para a tabela laravel_store.tbl_loja_settings: ~19 rows (aproximadamente)
/*!40000 ALTER TABLE `tbl_loja_settings` DISABLE KEYS */;
INSERT INTO `tbl_loja_settings` (`id`, `tipo`, `valor`, `ativo`) VALUES
	(1, 'frete-gratis-min-limit', '500', 1),
	(2, 'frete-disponivel', 'frete-valor-minimo', 1),
	(3, 'max-parcelas', '10', 1),
	(4, 'cupom-habilitado', '1', 1),
	(5, 'cupom-valido-codigo', '10REAIS', 1),
	(6, 'cupom-valido-desconto', '10', 1),
	(7, 'nw-img-topo', 'http://127.0.0.1:8000/images/header-carousel/mobile/336x280/1.png', 1),
	(8, 'nw-img-lado', 'http://127.0.0.1:8000/images/header-carousel/mobile/336x280/1.png', 1),
	(9, 'newsletter-texto', 'Cadastre seu e-mail e receba nossas promoções e novidades!', 1),
	(10, 'newsletter-texto-resp', '1000', 1),
	(11, 'newsletter-modal-expiry', '1', 1),
	(12, 'newsletter-modal-trigger', 'scroll-perc', 1),
	(13, 'newsletter-modal-trigger-value', '10', 1),
	(14, 'newsletter-modal-texto', 'Cadastre seu e-mail e receba nossas promoções e novidades!', 1),
	(15, 'newsletter-modal-texto-resp', 'bbb', 1),
	(16, 'show-top-bar', '1', 1),
	(17, 'mautic-segmento-nw-f', NULL, 0),
	(18, 'mautic-segmento-nw-m', NULL, 0),
	(19, 'pagarme-encryption-key', NULL, 0);
/*!40000 ALTER TABLE `tbl_loja_settings` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
