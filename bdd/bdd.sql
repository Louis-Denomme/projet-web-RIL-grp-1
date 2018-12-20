-- --------------------------------------------------------
-- Hôte :                        127.0.0.1
-- Version du serveur:           5.7.19 - MySQL Community Server (GPL)
-- SE du serveur:                Win64
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Export de la structure de la table projetwebril8. adresse
CREATE TABLE IF NOT EXISTS `adresse` (
  `ADR_IDTADR` int(11) NOT NULL,
  `ADR_NUM` int(11) DEFAULT NULL,
  `ADR_COMP` varchar(50) DEFAULT NULL,
  `ADR_VOIE` varchar(50) DEFAULT NULL,
  `ADR_CODEPOSTAL` int(11) DEFAULT NULL,
  `ADR_VILLE` varchar(50) DEFAULT NULL,
  `ADR_PAYS` varchar(50) DEFAULT NULL,
  `ADR_VALIDE` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`ADR_IDTADR`),
  UNIQUE KEY `ADR_IDTADR` (`ADR_IDTADR`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Table des adresses';

-- Les données exportées n'étaient pas sélectionnées.
-- Export de la structure de la table projetwebril8. agence
CREATE TABLE IF NOT EXISTS `agence` (
  `AGC_IDTAGC` int(11) NOT NULL,
  `AGC_IDTADR` int(11) DEFAULT NULL,
  `AGC_IDTPHO` int(11) DEFAULT NULL,
  `AGC_NOM` varchar(50) DEFAULT NULL,
  `AGC_TEL` varchar(50) DEFAULT NULL,
  `AGC_EMAIL` varchar(50) DEFAULT NULL,
  `AGC_FAX` varchar(50) DEFAULT NULL,
  `AGC_VALIDE` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`AGC_IDTAGC`),
  UNIQUE KEY `AGC_IDTAGC` (`AGC_IDTAGC`),
  KEY `AGC_IDTADR` (`AGC_IDTADR`),
  KEY `AGC_IDTPHO` (`AGC_IDTPHO`),
  CONSTRAINT `FK_agence_adresse` FOREIGN KEY (`AGC_IDTADR`) REFERENCES `adresse` (`ADR_IDTADR`),
  CONSTRAINT `FK_agence_photo` FOREIGN KEY (`AGC_IDTPHO`) REFERENCES `photo` (`PHO_IDTPHO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Table des agences';

-- Les données exportées n'étaient pas sélectionnées.
-- Export de la structure de la table projetwebril8. agent
CREATE TABLE IF NOT EXISTS `agent` (
  `AGT_IDTAGT` int(11) NOT NULL,
  `AGT_IDTPRF` int(11) DEFAULT NULL,
  `AGT_IDTAGC` int(11) DEFAULT NULL,
  `AGT_IDTADR` int(11) DEFAULT NULL,
  `AGT_NOM` varchar(50) DEFAULT NULL,
  `AGT_PRENOM` varchar(50) DEFAULT NULL,
  `AGT_TEL` varchar(11) DEFAULT NULL,
  `AGT_MOBILE` varchar(11) DEFAULT NULL,
  `AGT_FAX` varchar(11) DEFAULT NULL,
  `AGT_EMAIL` varchar(50) DEFAULT NULL,
  `AGT_LOGIN` varchar(50) DEFAULT NULL,
  `AGT_PWD` varchar(50) DEFAULT NULL,
  `AGT_SEL` varchar(50) DEFAULT NULL,
  `AGT_VALIDE` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`AGT_IDTAGT`),
  UNIQUE KEY `AGT_IDTAGT` (`AGT_IDTAGT`),
  KEY `AGT_IDTPRF` (`AGT_IDTPRF`),
  KEY `AGT_IDTAGC` (`AGT_IDTAGC`),
  KEY `AGT_IDTADR` (`AGT_IDTADR`),
  CONSTRAINT `FK_agent_adresse` FOREIGN KEY (`AGT_IDTADR`) REFERENCES `adresse` (`ADR_IDTADR`),
  CONSTRAINT `FK_agent_agence` FOREIGN KEY (`AGT_IDTAGC`) REFERENCES `agence` (`AGC_IDTAGC`),
  CONSTRAINT `FK_agent_profil` FOREIGN KEY (`AGT_IDTPRF`) REFERENCES `profil` (`PRF_IDTPRF`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tables des agents';

-- Les données exportées n'étaient pas sélectionnées.
-- Export de la structure de la table projetwebril8. client
CREATE TABLE IF NOT EXISTS `client` (
  `CLI_IDTCLI` int(11) NOT NULL,
  `CLI_IDTADR` int(11) DEFAULT NULL,
  `CLI_NOM` varchar(50) DEFAULT NULL,
  `CLI_PRENOM` varchar(50) DEFAULT NULL,
  `CLI_TEL` int(11) DEFAULT NULL,
  `CLI_EMAIL` varchar(50) DEFAULT NULL,
  `CLI_FAX` int(11) DEFAULT NULL,
  `CLI_MOBILE` int(11) DEFAULT NULL,
  `CLI_DATCRE` date DEFAULT NULL,
  `CLI_VALIDE` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`CLI_IDTCLI`),
  UNIQUE KEY `CLI_IDTCLI` (`CLI_IDTCLI`),
  KEY `CLI_IDTADR` (`CLI_IDTADR`),
  CONSTRAINT `FK_client_adresse` FOREIGN KEY (`CLI_IDTADR`) REFERENCES `adresse` (`ADR_IDTADR`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Table des clients\r\n';

-- Les données exportées n'étaient pas sélectionnées.
-- Export de la structure de la table projetwebril8. droit
CREATE TABLE IF NOT EXISTS `droit` (
  `DRT_IDTDRT` int(11) NOT NULL,
  `DRT_LIBELLE` varchar(50) DEFAULT NULL,
  `DRT_VALIDE` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`DRT_IDTDRT`),
  UNIQUE KEY `DRT_IDTDRT` (`DRT_IDTDRT`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tables des droits';

-- Les données exportées n'étaient pas sélectionnées.
-- Export de la structure de la table projetwebril8. historique
CREATE TABLE IF NOT EXISTS `historique` (
  `HIS_IDTHIS` int(11) NOT NULL,
  `HIS_IDTTPH` int(11) DEFAULT NULL,
  `HIS_IDTVHL` int(11) DEFAULT NULL,
  `HIS_IDTAGC` int(11) DEFAULT NULL,
  `HIS_IDTCLI` int(11) DEFAULT NULL,
  `HIS_IDTAGT` int(11) DEFAULT NULL,
  `HIS_DATEMODIF` int(11) DEFAULT NULL,
  PRIMARY KEY (`HIS_IDTHIS`),
  UNIQUE KEY `HIS_IDTHIS` (`HIS_IDTHIS`),
  KEY `HIS_IDTTPH` (`HIS_IDTTPH`),
  KEY `HIS_IDTVHL` (`HIS_IDTVHL`),
  KEY `HIS_IDTAGC` (`HIS_IDTAGC`),
  KEY `HIS_IDTCLI` (`HIS_IDTCLI`),
  KEY `HIS_IDTAGT` (`HIS_IDTAGT`),
  CONSTRAINT `FK_historique_agence` FOREIGN KEY (`HIS_IDTAGC`) REFERENCES `agence` (`AGC_IDTAGC`),
  CONSTRAINT `FK_historique_agent` FOREIGN KEY (`HIS_IDTAGT`) REFERENCES `agent` (`AGT_IDTAGT`),
  CONSTRAINT `FK_historique_client` FOREIGN KEY (`HIS_IDTCLI`) REFERENCES `client` (`CLI_IDTCLI`),
  CONSTRAINT `FK_historique_typehisto` FOREIGN KEY (`HIS_IDTTPH`) REFERENCES `typehisto` (`TPH_IDTTPH`),
  CONSTRAINT `FK_historique_vehicule` FOREIGN KEY (`HIS_IDTVHL`) REFERENCES `vehicule` (`VHL_IDTVHL`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Historique des modifications d''un véhicule\r\n';

-- Les données exportées n'étaient pas sélectionnées.
-- Export de la structure de la table projetwebril8. lien_cli_vhl
CREATE TABLE IF NOT EXISTS `lien_cli_vhl` (
  `LCV_IDTLCV` int(11) NOT NULL,
  `LCV_IDTCLI` int(11) DEFAULT NULL,
  `LCV_IDTVHL` int(11) DEFAULT NULL,
  `LCV_DATEDEPART` date DEFAULT NULL,
  `LCV_DATERETOUR` date DEFAULT NULL,
  `LCV_DATERETOUR_EFF` date DEFAULT NULL,
  `LCV_VALIDE` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`LCV_IDTLCV`),
  UNIQUE KEY `LCV_IDTLCV` (`LCV_IDTLCV`),
  KEY `LCV_IDTCLI` (`LCV_IDTCLI`),
  KEY `LCV_IDTVHL` (`LCV_IDTVHL`),
  CONSTRAINT `FK_lien_cli_vhl_client` FOREIGN KEY (`LCV_IDTCLI`) REFERENCES `client` (`CLI_IDTCLI`),
  CONSTRAINT `FK_lien_cli_vhl_vehicule` FOREIGN KEY (`LCV_IDTVHL`) REFERENCES `vehicule` (`VHL_IDTVHL`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Lien client véhicule';

-- Les données exportées n'étaient pas sélectionnées.
-- Export de la structure de la table projetwebril8. lien_prf_drt
CREATE TABLE IF NOT EXISTS `lien_prf_drt` (
  `LPD_IDTLPD` int(11) NOT NULL,
  `LPD_IDTPRF` int(11) DEFAULT NULL,
  `LPD_IDTDRT` int(11) DEFAULT NULL,
  PRIMARY KEY (`LPD_IDTLPD`),
  UNIQUE KEY `LPD_IDTLPD` (`LPD_IDTLPD`),
  KEY `LPD_IDTPRF` (`LPD_IDTPRF`),
  KEY `LPD_IDTDRT` (`LPD_IDTDRT`),
  CONSTRAINT `FK_lien_prf_drt_droit` FOREIGN KEY (`LPD_IDTDRT`) REFERENCES `droit` (`DRT_IDTDRT`),
  CONSTRAINT `FK_lien_prf_drt_profil` FOREIGN KEY (`LPD_IDTPRF`) REFERENCES `profil` (`PRF_IDTPRF`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Lien entre un profil et un droit';

-- Les données exportées n'étaient pas sélectionnées.
-- Export de la structure de la table projetwebril8. photo
CREATE TABLE IF NOT EXISTS `photo` (
  `PHO_IDTPHO` int(11) NOT NULL,
  `PHO_IDTAGC` int(11) DEFAULT NULL,
  `PHO_IDTVHL` int(11) DEFAULT NULL,
  `PHO_URL` varchar(50) DEFAULT NULL,
  `PHO_VALIDE` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`PHO_IDTPHO`),
  UNIQUE KEY `PHO_IDTPHO` (`PHO_IDTPHO`),
  KEY `PHO_IDTAGC` (`PHO_IDTAGC`),
  KEY `PHO_IDTVHL` (`PHO_IDTVHL`),
  CONSTRAINT `FK_photo_agence` FOREIGN KEY (`PHO_IDTAGC`) REFERENCES `agence` (`AGC_IDTAGC`),
  CONSTRAINT `FK_photo_vehicule` FOREIGN KEY (`PHO_IDTVHL`) REFERENCES `vehicule` (`VHL_IDTVHL`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.
-- Export de la structure de la table projetwebril8. profil
CREATE TABLE IF NOT EXISTS `profil` (
  `PRF_IDTPRF` int(11) NOT NULL,
  `PRF_LIBELLE` varchar(50) DEFAULT NULL,
  `PRF_VALIDE` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`PRF_IDTPRF`),
  UNIQUE KEY `PRF_IDTPRF` (`PRF_IDTPRF`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Table des profils\r\n';

-- Les données exportées n'étaient pas sélectionnées.
-- Export de la structure de la table projetwebril8. statut
CREATE TABLE IF NOT EXISTS `statut` (
  `STT_IDTSTT` int(11) NOT NULL,
  `STT_LIBELLE` varchar(50) DEFAULT NULL,
  `STT_COULEUR` varchar(50) DEFAULT NULL COMMENT 'couleur en HEXA (#XXXXXX)',
  `STT_VALIDE` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`STT_IDTSTT`),
  UNIQUE KEY `STT_IDTSTT` (`STT_IDTSTT`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tables des statuts possibles pour un véhicule';

-- Les données exportées n'étaient pas sélectionnées.
-- Export de la structure de la table projetwebril8. typehisto
CREATE TABLE IF NOT EXISTS `typehisto` (
  `TPH_IDTTPH` int(11) NOT NULL,
  `TPH_LIBELLE` varchar(50) DEFAULT NULL,
  `TPH_VALIDE` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`TPH_IDTTPH`),
  UNIQUE KEY `TPH_IDTTPH` (`TPH_IDTTPH`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Type d''historique\r\n';

-- Les données exportées n'étaient pas sélectionnées.
-- Export de la structure de la table projetwebril8. vehicule
CREATE TABLE IF NOT EXISTS `vehicule` (
  `VHL_IDTVHL` int(11) NOT NULL,
  `VHL_IDTAGC` int(11) DEFAULT NULL,
  `VHL_IDTSTT` int(11) DEFAULT NULL,
  `VHL_MODELE` varchar(50) DEFAULT NULL,
  `VHL_DATECIRCULATION` date DEFAULT NULL,
  `VHL_HAUTEUR` decimal(10,0) DEFAULT NULL COMMENT 'en m',
  `VHL_LARGEUR` decimal(10,0) DEFAULT NULL COMMENT 'en m',
  `VHL_LONGUEUR` decimal(10,0) DEFAULT NULL COMMENT 'en m',
  `VHL_POIDS` decimal(10,0) DEFAULT NULL COMMENT 'en Tonnes',
  `VHL_PUISSANCE` decimal(10,0) DEFAULT NULL COMMENT 'en Chv',
  `VHL_DATE_CTRL_TCH_PRC` date DEFAULT NULL COMMENT 'Date du dernier controle',
  `VHL_DATE_CTRL_SVT` date DEFAULT NULL COMMENT 'Date du prochain controle',
  `VHL_KILOMETRAGE` int(11) DEFAULT NULL COMMENT 'en KM',
  `VHL_IMMATRICULATION` varchar(50) DEFAULT NULL,
  `VHL_PERMIS` varchar(50) DEFAULT NULL,
  `VHL_CARBURANT` varchar(50) DEFAULT NULL,
  `VHL_CAPASTCK` decimal(10,0) DEFAULT NULL COMMENT 'En m²',
  `VHL_CLASSEECO` varchar(50) DEFAULT NULL,
  `VHL_VALIDE` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`VHL_IDTVHL`),
  UNIQUE KEY `VHL_IDTVHL` (`VHL_IDTVHL`),
  UNIQUE KEY `VHL_IMMATRICULATION` (`VHL_IMMATRICULATION`),
  KEY `VHL_IDTAGC` (`VHL_IDTAGC`),
  KEY `VHL_IDTSTT` (`VHL_IDTSTT`),
  CONSTRAINT `FK_vehicule_agence` FOREIGN KEY (`VHL_IDTAGC`) REFERENCES `agence` (`AGC_IDTAGC`),
  CONSTRAINT `FK_vehicule_statut` FOREIGN KEY (`VHL_IDTSTT`) REFERENCES `statut` (`STT_IDTSTT`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Table des véhicules';

-- Les données exportées n'étaient pas sélectionnées.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
