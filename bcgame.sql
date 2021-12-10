-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2021 at 03:44 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bcgame`
--

-- --------------------------------------------------------

--
-- Table structure for table `Coin`
--

CREATE TABLE `Coin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `oriName` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `size` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Coin`
--

INSERT INTO `Coin` (`id`, `name`, `content`, `description`, `oriName`, `type`, `size`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'JB', 'JB Coin', 'About JB\nJB is the proprietary game currency (in-house game currency) of BC.Game platform. It can be acquired by VIP level-up, lucky spin and other event rewards.\n\nIn addition to being used for games,JB can also be used to boost daily Rakeback and substit', 'JB.black.png', 'image/png', 1240, 'http://localhost:4000/resources/uploads/coins/coins-JB.black.png', '2021-12-07 17:44:27', '2021-12-07 19:29:41'),
(2, 'AAVE', 'Aave Token', NULL, 'AAVE.black.png', 'image/png', 11491, 'http://localhost:4000/resources/uploads/coins/coins-AAVE.black.png', '2021-12-02 19:55:09', '2021-12-02 19:55:09'),
(3, 'ADA', 'Cardano', NULL, 'ADA.black.png', 'image/png', 4763, 'http://localhost:4000/resources/uploads/coins/coins-ADA.black.png', '2021-12-02 19:58:43', '2021-12-02 19:58:43'),
(4, 'AMP', 'AMP', NULL, 'AMP.black.png', 'image/png', 7797, 'http://localhost:4000/resources/uploads/coins/coins-AMP.black.png', '2021-12-02 20:39:05', '2021-12-02 20:39:05'),
(5, 'AMPL', 'Ampleforth', NULL, 'AMPL.black.png', 'image/png', 3693, 'http://localhost:4000/resources/uploads/coins/coins-AMPL.black.png', '2021-12-02 20:45:09', '2021-12-02 20:45:09'),
(6, 'AVC', 'AVC Coin', NULL, 'AVC.black.png', 'image/png', 11226, 'http://localhost:4000/resources/uploads/coins/coins-AVC.black.png', '2021-12-06 02:47:25', '2021-12-06 02:47:25'),
(7, 'AXS', 'Axie Infinity Shard', NULL, 'AXS.black.png', 'image/png', 13696, 'http://localhost:4000/resources/uploads/coins/coins-AXS.black.png', '2021-12-06 16:53:02', '2021-12-06 16:53:02'),
(8, 'BANANO', 'Banano', NULL, 'BANANO.black.png', 'image/png', 5370, 'http://localhost:4000/resources/uploads/coins/coins-BANANO.black.png', '2021-12-06 17:12:35', '2021-12-06 17:12:35'),
(9, 'BAT', 'Basic Attention Token', NULL, 'BAT.black.png', 'image/png', 3317, 'http://localhost:4000/resources/uploads/coins/coins-BAT.black.png', '2021-12-06 17:13:05', '2021-12-06 17:13:05'),
(10, 'BCD', 'BCD', 'BCD (BC Dollar) is a crypto launched by BC.Game. You can play games, tip, coindrop, rain with it.\r\n\r\n1 BCD = 1 USD , You can BCSwap BCD into any other currencies at any time and withdraw it to your wallet.\r\n\r\nDeposit BCD into Vault, Enjoy up to 10% Annual', 'BCD.black.png', 'image/png', 3666, 'http://localhost:4000/resources/uploads/coins/coins-BCD.black.png', '2021-12-06 17:13:29', '2021-12-06 17:13:29'),
(11, 'BCH', 'Bitcoin Cash', NULL, 'BCH.black.png', 'image/png', 1663, 'http://localhost:4000/resources/uploads/coins/coins-BCH.black.png', '2021-12-06 17:13:55', '2021-12-06 17:13:55'),
(12, 'BIT', 'BitDAO', NULL, 'BIT.black.png', 'image/png', 15180, 'http://localhost:4000/resources/uploads/coins/coins-BIT.black.png', '2021-12-06 17:14:11', '2021-12-06 17:14:11'),
(13, 'BNB', 'Binance Coin', NULL, 'BNB.black.png', 'image/png', 4854, 'http://localhost:4000/resources/uploads/coins/coins-BNB.black.png', '2021-12-06 17:14:28', '2021-12-06 17:14:28'),
(14, 'BSV', 'Bitcoin SV', NULL, 'BSV.black.png', 'image/png', 22427, 'http://localhost:4000/resources/uploads/coins/coins-BSV.black.png', '2021-12-06 17:14:47', '2021-12-06 17:14:47'),
(15, 'BTC', 'Bitcoin', NULL, 'BTC.black.png', 'image/png', 1603, 'http://localhost:4000/resources/uploads/coins/coins-BTC.black.png', '2021-12-06 17:15:17', '2021-12-06 17:15:17'),
(16, 'BTT', 'BitTorrent', NULL, 'BTT.black.png', 'image/png', 6536, 'http://localhost:4000/resources/uploads/coins/coins-BTT.black.png', '2021-12-07 17:46:44', '2021-12-07 17:46:44'),
(17, 'BUSD', 'Binance USD', NULL, 'BUSD.black.png', 'image/png', 3845, 'http://localhost:4000/resources/uploads/coins/coins-BUSD.black.png', '2021-12-07 19:21:13', '2021-12-07 19:21:13');

-- --------------------------------------------------------

--
-- Table structure for table `DepositCoin`
--

CREATE TABLE `DepositCoin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `DepositCoin`
--

INSERT INTO `DepositCoin` (`id`, `name`, `content`, `createdAt`, `updatedAt`) VALUES
(1, '1INCH', '1INCH', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(2, 'AAVE', 'Aave Token', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(3, 'ABYSS', 'ABYSS', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(4, 'ACH', 'ACH', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(5, 'ACM', 'ACM', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(6, 'ADA', 'Cardano', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(7, 'AE', 'AE', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(8, 'AGLD', 'AGLD', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(9, 'ALCX', 'ALCX', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(10, 'ALGO', 'ALGO', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(11, 'ALICE', 'ALICE', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(12, 'ALPACA', 'ALPACA', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(13, 'ALPHA', 'ALPHA', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(14, 'AMB', 'AMB', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(15, 'ANKR', 'ANKR', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(16, 'ANT', 'ANT', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(17, 'ARDR', 'ARDR', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(18, 'ARK', 'ARK', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(19, 'ARPA', 'ARPA', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(20, 'ARRR', 'ARRR', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(21, 'ASP', 'ASP', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(22, 'ATA', 'ATA', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(23, 'ATOM', 'ATOM', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(24, 'AUCTION', 'AUCTION', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(25, 'AVA', 'AVA', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(26, 'AVAXC', 'AVAXC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(27, 'AXS', 'Axie Infinity Shard', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(28, 'BADGER', 'BADGER', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(29, 'BAL', 'BAL', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(30, 'BAT', 'Basic Attention Token', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(31, 'BCD', 'BCD', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(32, 'BCH', 'Bitcoin Cash', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(33, 'BDG', 'BDG', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(34, 'BETA', 'BETA', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(35, 'BNB', 'Binance Coin', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(36, 'BNBBSC', 'BNBBSC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(37, 'BNT', 'BNT', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(38, 'BNX', 'BNX', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(39, 'BRD', 'BRD', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(40, 'BSV', 'Bitcoin SV', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(41, 'BTC', 'BTC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(42, 'BTCV', 'BTCV', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(43, 'BTG', 'BTG', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(44, 'BTRST', 'BTRST', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(45, 'BUSD', 'Binance USD', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(46, 'BUSDBSC', 'BUSDBSC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(47, 'C98', 'C98', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(48, 'CAKE', 'PancakeSwap', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(49, 'CELO', 'CELO', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(50, 'CELR', 'CELR', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(51, 'CHESS', 'CHESS', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(52, 'CHR', 'CHR', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(53, 'CHZ', 'CHZ', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(54, 'CKB', 'CKB', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(55, 'CNS', 'CNS', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(56, 'COMP', 'COMP', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(57, 'COTI', 'COTI', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(58, 'CROOLD', 'CROOLD', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(59, 'CRV', 'Curve DAO Token', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(60, 'CTSI', 'CTSI', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(61, 'CUR', 'CUR', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(62, 'CVC', 'CVC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(63, 'CW', 'CW', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(64, 'DAI', 'Multi-collateral DAI', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(65, 'DAR', 'DAR', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(66, 'DASH', 'DASH', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(67, 'DCR', 'DCR', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(68, 'DENT', 'DENT', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(69, 'DGB', 'DGB', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(70, 'DGD', 'DGD', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(71, 'DGTX', 'DGTX', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(72, 'DNT', 'DNT', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(73, 'DOGE', 'Doge Coin', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(74, 'DOT', 'Polkadot', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(75, 'DYDX', 'DYDX', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(76, 'EDG', 'EDG', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(77, 'EGLD', 'EGLD', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(78, 'ENJ', 'Enjin Coin', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(79, 'ENS', 'ENS', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(80, 'EOS', 'EOS', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(81, 'EOSDT', 'EOSDT', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(82, 'EQX', 'EQX', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(83, 'ERG', 'ERG', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(84, 'ERK', 'ERK', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(85, 'ETN', 'ETN', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(86, 'EURS', 'STASIS EURS', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(87, 'FIDA', 'FIDA', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(88, 'FIL', 'FIL', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(89, 'FIO', 'FIO', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(90, 'FIRO', 'FIRO', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(91, 'FLOW', 'FLOW', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(92, 'FRONT', 'FRONT', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(93, 'FTM', 'FTM', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(94, 'FTT', 'FTT', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(95, 'FUN', 'FUN', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(96, 'GALA', 'GALA', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(97, 'GAS', 'GAS', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(98, 'GASP', 'GASP', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(99, 'GLM', 'GLM', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(100, 'GMD', 'GMD', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(101, 'GNO', 'GNO', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(102, 'GRS', 'GRS', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(103, 'GRT', 'GRT', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(104, 'GUSD', 'GUSD', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(105, 'HBAR', 'HBAR', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(106, 'HEDG', 'HEDG', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(107, 'HEX', 'HEX', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(108, 'HIVE', 'HIVE', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(109, 'HOT', 'HOT', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(110, 'HT', 'HT', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(111, 'ICP', 'ICP', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(112, 'ICX', 'ICX', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(113, 'IDEX', 'IDEX', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(114, 'IGNIS', 'IGNIS', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(115, 'ILV', 'ILV', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(116, 'IOST', 'IOST', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(117, 'IOTA', 'IOTA', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(118, 'IOTX', 'IOTX', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(119, 'IQQ', 'IQQ', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(120, 'JASMY', 'JASMY', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(121, 'JST', 'JST', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(122, 'JUV', 'JUV', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(123, 'KMD', 'KMD', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(124, 'KNC', 'KNC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(125, 'KRL', 'KRL', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(126, 'KSM', 'Kusama', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(127, 'LCX', 'LCX', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(128, 'LEVL', 'LEVL', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(129, 'LINK', 'ChainLink', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(130, 'LPT', 'LPT', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(131, 'LRC', 'LRC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(132, 'LSK', 'LSK', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(133, 'LTC', 'Litecoin', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(134, 'LUN', 'LUN', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(135, 'LUNA', 'LUNA', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(136, 'MAID', 'MAID', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(137, 'MANA', 'Decentraland', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(138, 'MASK', 'MASK', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(139, 'MATIC', 'Polygon', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(140, 'MBOX', 'MBOX', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(141, 'MITH', 'MITH', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(142, 'MKR', 'MKR', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(143, 'MO', 'MO', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(144, 'NANO', 'NANO', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(145, 'NEBL', 'NEBL', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(146, 'NEO', 'NEO', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(147, 'NEXO', 'NEXO', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(148, 'NGC', 'NGC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(149, 'NIM', 'NIM', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(150, 'NMR', 'NMR', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(151, 'NRG', 'NRG', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(152, 'NUT', 'NUT', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(153, 'NXT', 'NXT', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(154, 'OCC', 'OCC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(155, 'OCCADA', 'OCCADA', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(156, 'OKB', 'OKB', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(157, 'OMG', 'OMG', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(158, 'ONT', 'ONT', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(159, 'PAXG', 'PAXG', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(160, 'PAY', 'PAY', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(161, 'PEAK', 'PEAK', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(162, 'PERP', 'PERP', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(163, 'PLR', 'PLR', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(164, 'PMA', 'PMA', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(165, 'POLY', 'POLY', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(166, 'POWR', 'POWR', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(167, 'PPC', 'PPC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(168, 'PPT', 'PPT', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(169, 'PSG', 'PSG', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(170, 'QNT', 'QNT', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(171, 'QTUM', 'QTUM', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(172, 'RAD', 'RAD', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(173, 'RARI', 'RARI', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(174, 'RCN', 'RCN', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(175, 'REN', 'REN', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(176, 'REP', 'REP', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(177, 'REQ', 'REQ', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(178, 'RLC', 'RLC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(179, 'RNDR', 'RNDR', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(180, 'ROOBEE', 'ROOBEE', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(181, 'RVN', 'RVN', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(182, 'SAND', 'The Sandbox', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(183, 'SHIB', 'SHIBA INU', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(184, 'SKL', 'SKL', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(185, 'SLP', 'SLP', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(186, 'SMART', 'SMART', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(187, 'SNX', 'Synthetix Network', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(188, 'SOL', 'SOL', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(189, 'SOLVE', 'SOLVE', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(190, 'SRM', 'SRM', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(191, 'STC', 'STC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(192, 'STORJ', 'STORJ', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(193, 'STX', 'STX', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(194, 'SUB', 'SUB', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(195, 'SUSHI', 'SUSHI', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(196, 'SXP', 'SXP', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(197, 'SYBC', 'SYBC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(198, 'SYS', 'SYS', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(199, 'TEL', 'TEL', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(200, 'TFUEL', 'TFUEL', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(201, 'THETA', 'THETA', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(202, 'TLM', 'TLM', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(203, 'TOMO', 'TOMO', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(204, 'TRAC', 'TRAC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(205, 'TRIBE', 'TRIBE', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(206, 'TRX', 'TRX', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(207, 'TUSD', 'TUSD', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(208, 'UMA', 'UMA', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(209, 'UNI', 'Uniswap', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(210, 'UOS', 'UOS', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(211, 'USDC', 'USD Coin', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(212, 'USDP', 'USDP', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(213, 'USDT', 'Tether', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(214, 'USDT20', 'USDT20', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(215, 'USDTRX', 'USDTRX', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(216, 'UTK', 'UTK', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(217, 'VET', 'VET', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(218, 'VIB', 'VIB', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(219, 'VIDT', 'VIDT', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(220, 'VRA', 'VRA', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(221, 'VTC', 'VTC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(222, 'VTHO', 'VTHO', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(223, 'WABI', 'WABI', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(224, 'WADA', 'WADA', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(225, 'WAVES', 'WAVES', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(226, 'WBTC', 'Wrapped BTC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(227, 'WINGS', 'WINGS', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(228, 'WLITI', 'WLITI', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(229, 'WTC', 'WTC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(230, 'XDC', 'XDC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(231, 'XLM', 'Stellar', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(232, 'XMR', 'Monero', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(233, 'XRP', 'Ripple', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(234, 'XTZ', 'XTZ', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(235, 'XVG', 'XVG', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(236, 'XVS', 'XVS', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(237, 'XYM', 'XYM', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(238, 'XYO', 'XYO', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(239, 'YFI', 'yearn.finance', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(240, 'YFII', 'YFII', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(241, 'YGG', 'Yield Guild Games', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(242, 'ZAP', 'ZAP', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(243, 'ZEC', 'ZEC', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(244, 'ZEN', 'ZEN', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(245, 'ZIL', 'Zilliqa', '2021-12-10 09:53:09', '2021-12-10 09:53:09'),
(246, 'ZRX', 'ZRX', '2021-12-10 09:53:09', '2021-12-10 09:53:09');

-- --------------------------------------------------------

--
-- Table structure for table `Game`
--

CREATE TABLE `Game` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `gameType` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0: OriginalGame, 1: Slots, 2: Casinos',
  `gameUrl` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `icon` longtext DEFAULT NULL,
  `image` longtext DEFAULT NULL,
  `supportedPlayType` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0: DemoPlay, 1: Mobile',
  `favorite` int(11) NOT NULL DEFAULT 0,
  `fairness` int(11) NOT NULL DEFAULT 0,
  `playType` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0: Freeplay, 1: RealPlay',
  `droppable` tinyint(4) NOT NULL DEFAULT 0,
  `parent` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Game`
--

INSERT INTO `Game` (`id`, `name`, `gameType`, `gameUrl`, `description`, `icon`, `image`, `supportedPlayType`, `favorite`, `fairness`, `playType`, `droppable`, `parent`, `createdAt`, `updatedAt`) VALUES
(1, 'Original', 0, '/original', 'Original', 'data:image/png;base64,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', NULL, 0, 0, 0, 0, 1, 0, '2021-11-22 20:34:19', '2021-11-22 20:34:19'),
(2, 'Slot', 0, '/slot', 'Slot', 'data:image/png;base64,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', NULL, 0, 0, 0, 0, 1, 0, '2021-11-22 20:34:19', '2021-11-22 20:34:19'),
(3, 'Casino', 0, '/casino', 'Casino', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAKP0lEQVR4Ae2ae3ATxxnAv707Sbb8lm0wcZwGYjuQhlcgGAIJOCVJadO0U9o0JJ0JKTTpa5I0M2laoBN36D8dmISZPmjp5I+mgf5BaFOYTv7olDg8OgnGUIIRfgyOsQ22jG35Jel0d7rt9+35xiI2DvXZUju9lU57t3u7++3v9vt2vz0BuMEl4BJwCbgEXAIuAZeAS8Al4BJwCbgEXAIugf8tAizd4h7ZvbtoxDBe4ADrJM59nLHzwNjeTa+8cjrdslH7aQX0x50715kAhyTGAkySAGPBhDHG8Wzf7KqqH1RXVxvpBKWkq/Hf79gxNxqPH8bRkiOPwpEoxgMBMUx7rrO2Ng/l25QuGaldKV2NRzTteVXXczRdB1XTAM8hO8cP69ffh5AYxDWN94fDT/xi69aV6ZIxrYAQyj0IQcAhzSJQgUA+zJlTDI88cj8Mhfuhd2AA+qLRzHQCSpuK4YjJlpFM+dwy+MbGDXDp4w64paRYsCgszId7Vy5l+w8eAT2RaE8noLSoWM2WLQFd0+4m1eofGCKbA+XzbgO/f2ywrKxaCgmJvbvvnXcu/d8BGtT13TFN85KKXb7SBSOR6DgGNKuVlM7eMS4jxQkpH0E1NTVSXNc3kc3BGExu4tJnwtVGY82eX59JMY9xzaUc0NWrV2UcOYzUi0aQpCht/syMcYKh3v1sfGLqU+RUN1lfX28urKi4xTDNe03ThJiqFrS2dTSsWr54li2Lqasd0tylW+zrdMYpH0HUWSkQeAnVq9MeRWcaGu9uaW6GhK6BERsBLTJ8NZ1QkttOC6DBzs65CKjYtkMUt7ReBiMyBIm4iqtXaZl2/r3lyYKm6zwt6yB0MX6Dhtk36lbALFwgLr2rEmjm4ui1ooeocGB18fPvN6L57kB71MZlXutbsPZAqkFNOH3MpBAt+7/16tZfBmuoYQK0qHIe/PjbT0IgLwc4fhh+KLYCXo9cAHnoNLDoJWBK3kH26OHHZ1K+T9ad8hE0Wwo/xbgOWgJR4PT+3IMBCGSjpoup3n5emKd2g9J2AMFcSdpz0L7CTz/rYcv36Z/syExdpxxQlpKrv7QK4K9NHBTGoaHuJNwZPwNm+UbgJVXYTwZS7zmQgm8AMxMWONI7BMhz50ZYaxh3SFIX7EeWshaNxg/fgq76p6QzbwCYBpzqZrCiBFUJJTHLPw+8oByk+r0WHMseAc8McHPJZgZFlapcudKPI8/WwRmXO+WzGGOSAqU4QZlZwCI6VOXoaGdQY0YMkM4eAem9PcAGVYBhSrPSWcatZ6FoAZgmz4CmU9UzTiWpgZSrGMj4TCL9wEIhsKYslCZpHIuxYV+LEYQXrRfz4X4r0WTwKJY4mtSHGT2dMUA/bF4zDzVoDWpDKfYz2+7FFdbhLzXQtaDRMapCIs8+nygeCRdwbpmei/zixhcuro7hpizeyXvRnF/O8+T8o6bi3SG7jemMpx3QixdWb0Dvc6ep82UkqFjXJEl8QHsr9KOC7QAFdxjQ0WS1P2qExW3J53Y5BidMbmxAGErcjN+GYLfZSwGKw9qQ/mJwzdsej/enuyqOTuv2iD2YbVGmHNfwr3vDwa7fIpJnqJK4iruF0Ti6DwZComGBwygvC3yZPljrqYYvqw80Sq9uzsf+lYhMG0xyTBmS1HXo8aIv3rN02/FbeVlWV6Ibtoe2YzGc7WQGHo8HMrMyQPGgW8mYiovNrXvmH9sv6pyGn2lxVmt4jTQQPHcI5XlC1wzoC4VhZCACWlwHQ0+AYVhHXNUhAzvTAZehXglqUXX47XlNkSoWR/XREaKG07qI6dqEqEeCw18I1B5fkbu9lJfmlbEyyGQ+OHjtz5CgOrEtehCRoai49mV4FVwMfPW+5z/T/sGv2v81DXySzePUq8PhvR1Hyc8JQH+on2abG1ZGq+eC4lzI8FtbHEqCD8++Gu8p7NX8xSEjEPdJsdAcT19vidcYyPfegX6ZsgAWwFpzLdyu3C7q/U7b92EoMd7keHweKCopwHlA0iSFrXjtzhPnbijITWY4tkEvf7yuRI8aP6Gti3BPeFI4JBPd1xcaAG+GF/zZGaQeOVfKxGGL7JNBzi+HcniQL4RF0kLwM/91718ypcwJAek4Ygd6hyAwK9+bSMAurPBhu9Kpxo4BaTHjabQ7WaRSiYQ109yMMBqqBh3Uoftz18DmoqchZsYAFQfypXzwMM911UQxr0VtgbpIHYR0XCLcIMQiqqgXH8BDLwcfqNh117GWG9x6U8mOAaG1pHUJREZiN9Vg8k2rs1fBlwoegzJvKeo6g0w5A1RThYboBejWu6HHuCbiTu0K9Bl9yUUnPY+OqGKE4vRAsr0+6c2fkukcEEA5GUzzPxg9tkw92Om2eBu0xy9Dj34NWuOt0BBrAA2dWSdB06zyJvByJ/VQWceAcNYITGaUJxOwRW1GtWme7JYp5eF7ALtcwD6ZauzYFzOjoMvkPvwXBXp1TWEwGLfeRDqQzXHPtHaeJSEgRZmWJZWDrowVpRmSQv9HeuFY6tTOHANSz1kzlz977K3o1ESZvlK2LKH3Y11Oa3UMKPYBBzMCkIVuhEzL/TSHLPyHiMerQM/JOEQ6Ddw3cRYcA8LlSSx6hIu/rBTOKkD/yHGVU+4R+Xl5hTn46ojDpTeHcQUC6QeEu3tt6kkG2j/RccQnN6u0EDL9vil3cioFGRrlnPxsKEQ3A3DDqHH3EKihBP35ybFn73ya51CL7voC9aCMO4MAnocAArMLhIMaR2/eEN78VLo9eRmayGX05hXy5vGBECRjmMPFXYNonDWxzcIl6djktXx6rmNAKOWb6Gp8l3Yp9L/LIDV6QVlvgFKJwuemxibpAyb01qrQ/hdcc4ygIDjL47dj/pIlRxtaHHkaVI/z8M3PrTmoyNLXvIoCHpzuxeFT0OVESH4JTCmBfhoe6KiSs0o+G8fYwJiuxYGETTwSuMijWBziHPHjR6TjNX0MsRDkoKOt0YYToIUxH3ccaTFPbdCB+0VPftTS8ienvXM+glCCnAx4NqbBIhS+0hIIPSu0BfKQDEpUQSBoDfDgCAlp4MsMdE0wHz1T4AbCwHMLDHWQjYLCW3EwULoAK86x7GicIIgiDxMw4CX9ircj+GJg37nmZsdwqEaU3HnY+7cTYSnTV42vbj4UEornTM+awtgvOaTUEXphaBkJurDaF2l4ameJklZRcf9YbaICUUikYQGKx8pLr1csXvw9q1bnv9NmJM42tQ4vq374D57oYI8syZ/F5X6+gptj9Bdf2nIllaGYPqRSou8ijUbKaD7SonOiZm/T0iUtRa2ydGLdI8qLdPpBjeVwnEn8mbpg0++CwaCdjZnOwrTYoIlE2LbpsUXoo81XZLkY/wsk00tSE19z6LgFK+yQSduxpGWGpXKYb/vgOqkhUjFRJfE/aIIQXevCZtEl2jNsNGHwuCmxLklJnKqtu9A9kRxumkvAJeAScAm4BFwCLgGXgEvAJeAScAm4BFwCLgGXwHUE/g2feKQbyxIGKwAAAABJRU5ErkJggg==', NULL, 0, 0, 0, 0, 1, 0, '2021-11-22 20:34:19', '2021-11-22 20:34:19'),
(4, 'Crash', 0, '/original/crash', 'CRASH is an online multiplayer blockchain guessing game that made as an increasing curve that may crash at any time.\n', 'http://localhost:4000/resources/uploads/nav/nav-original-1.svg', 'http://localhost:4000/resources/uploads/nav/nav-original-1.png', 0, 0, 0, 0, 0, 1, '2021-11-23 03:49:06', '2021-12-03 18:07:18'),
(5, 'Classic Dice', 0, '/original/classic-dice', 'Classic Dice, a probability game established by blockchain hash value calculation and algorithm, provides more fun with bet and prediction, in which the closer the number rolled by players to the random number, the higher the probability winning.\n', 'http://localhost:4000/resources/uploads/nav/nav-original-4.svg', 'http://localhost:4000/resources/uploads/nav/nav-original-4.png', 0, 0, 0, 0, 0, 1, '2021-11-23 03:51:09', '2021-12-03 17:54:00'),
(6, 'Mines', 0, '/original/mines', 'Join in on the Mines with one of our most popular and beloved games! Inspired by the classic Minesweeper, Mines will simply reveal the gems and avoid the bombs to increase your payout multiplier. With the freedom to cash out at any point of the game, the ', 'http://localhost:4000/resources/uploads/nav/nav-original-3.svg', 'http://localhost:4000/resources/uploads/nav/nav-original-3.png', 0, 0, 0, 0, 0, 1, '2021-11-23 04:41:22', '2021-12-03 17:51:19'),
(7, 'Ultimate Dice', 0, '/original/ultimate-dice', 'Whether you are a newcomer or an experienced player, this game will be quite straightforward to understand. Ultimate Dice come with numbers from 0 to 9999 and you need to choose the minimum and maximum numbers. If you get a number that is between your cho', 'http://localhost:4000/resources/uploads/nav/nav-original-5.svg', 'http://localhost:4000/resources/uploads/nav/nav-original-5.png', 0, 0, 0, 0, 0, 1, '2021-11-23 04:41:22', '2021-12-03 17:51:30'),
(8, 'Oriental Beauties', 0, '/original/oriental-beauties', 'Oriental Beauties is a beautifully designed slots that is provably fair like all our games.\n', 'http://localhost:4000/resources/uploads/nav/nav-original-6.svg', 'http://localhost:4000/resources/uploads/nav/nav-original-6.png', 0, 0, 0, 0, 0, 1, '2021-11-23 04:41:22', '2021-12-03 17:51:44'),
(9, 'Plinko', 0, '/original/plinko', 'Plinko is the peculiar game of chance played with a ball “plinking” down the vertical board populated with offset rows of pegs. represented the board in the form of a pyramid.\n', 'http://localhost:4000/resources/uploads/nav/nav-original-7.svg', 'http://localhost:4000/resources/uploads/nav/nav-original-7.png', 0, 0, 0, 0, 0, 1, '2021-11-23 04:41:22', '2021-12-03 17:51:56'),
(10, 'Cave Of Plunder', 0, '/original/cave-of-plunder', 'The Cave Of Plunder- A Unique Slot Game\n', 'http://localhost:4000/resources/uploads/nav/nav-original-8.svg', 'http://localhost:4000/resources/uploads/nav/nav-original-8.png', 0, 0, 0, 0, 0, 1, '2021-11-23 04:41:22', '2021-12-03 17:52:22'),
(11, 'Wheel', 0, '/original/wheel', 'There is a silly red creature with wings and strange features. Coco calls it a bird.\n', 'http://localhost:4000/resources/uploads/nav/nav-original-9.svg', 'http://localhost:4000/resources/uploads/nav/nav-original-9.png', 0, 0, 0, 0, 0, 1, '2021-11-23 04:41:22', '2021-12-03 17:52:33'),
(12, 'Saviour Sword', 0, '/original/saviour-sword', 'With the power of the Saviour Sword, Hal Green will be able to defeat the evil.\n', 'http://localhost:4000/resources/uploads/nav/nav-original-10.svg', 'http://localhost:4000/resources/uploads/nav/nav-original-10.png', 0, 0, 0, 0, 0, 1, '2021-11-23 04:41:22', '2021-12-03 17:52:45'),
(13, 'Roulette', 0, '/original/roulette', 'Roulette is a common quiz game with a total of 37 numbers, including numbers 1 to 36 and 0; The numbers on the wheel are spaced in red and black, but the numbers are not in order.\n', 'http://localhost:4000/resources/uploads/nav/nav-original-11.svg', 'http://localhost:4000/resources/uploads/nav/nav-original-11.png', 0, 0, 0, 0, 0, 1, '2021-11-23 04:41:22', '2021-12-03 17:52:56'),
(14, 'Video Poker', 0, '/original/video-poker', 'Video Poker involves 52 cards in a deck. When you get a winning hand, you get a great reward.\n', 'http://localhost:4000/resources/uploads/nav/nav-original-12.svg', 'http://localhost:4000/resources/uploads/nav/nav-original-12.png', 0, 0, 0, 0, 0, 1, '2021-11-23 04:41:22', '2021-12-03 17:53:07'),
(15, 'Crash Trenball', 0, '/original/crash-trenball', 'CRASH is an online multiplayer blockchain guessing game that made as an increasing curve that may crash at any time.\n', 'http://localhost:4000/resources/uploads/nav/nav-original-2.svg', 'http://localhost:4000/resources/uploads/nav/nav-original-2.png', 0, 0, 0, 0, 0, 1, '2021-11-23 04:41:22', '2021-12-03 17:54:37'),
(16, 'Buffalo Power: Christmas', 1, '/slot/buffalo-power-christmas', '', '', 'http://localhost:4000/resources/uploads/nav/nav-slot-1.png', 0, 0, 0, 0, 0, 2, '2021-11-23 05:01:26', '2021-12-03 18:04:15'),
(17, 'Candy Boom', 1, '/slot/candy-boom', '', '', 'http://localhost:4000/resources/uploads/nav/nav-slot-2.png', 0, 0, 0, 0, 0, 2, '2021-11-23 05:02:10', '2021-12-03 18:04:22'),
(18, 'Diamon Wins', 1, '/slot/diamond-wins', '', '', 'http://localhost:4000/resources/uploads/nav/nav-slot-3.png', 0, 0, 0, 0, 0, 2, '2021-11-23 05:15:59', '2021-12-03 18:04:44'),
(19, 'Alter World', 1, '/slot/alter-world', '', '', 'http://localhost:4000/resources/uploads/nav/nav-slot-4.png', 0, 0, 0, 0, 0, 2, '2021-11-23 05:20:10', '2021-12-03 18:04:50'),
(20, 'Royal Coins', 1, '/slot/royal-coins', '', '', 'http://localhost:4000/resources/uploads/nav/nav-slot-5.png', 0, 0, 0, 0, 0, 2, '2021-11-23 05:21:28', '2021-12-03 18:04:56'),
(21, 'Solar Queen Megaways', 1, '/slot/solar-queen-megaways', '', '', 'http://localhost:4000/resources/uploads/nav/nav-slot-6.png', 0, 0, 0, 0, 0, 2, '2021-11-23 05:22:27', '2021-12-03 18:05:01'),
(22, 'The Fruit Megaways', 1, '/slot/fruit-megaways', '', '', 'http://localhost:4000/resources/uploads/nav/nav-slot-7.png', 0, 0, 0, 0, 0, 2, '2021-11-23 05:23:03', '2021-12-03 18:05:13'),
(23, 'Aztec Pyramid', 1, '/slot/aztec-pyramid', '', '', 'http://localhost:4000/resources/uploads/nav/nav-slot-8.png', 0, 0, 0, 0, 0, 2, '2021-11-23 05:23:33', '2021-12-03 18:05:19'),
(24, 'Witch Academy', 1, '/slot/witch-academy', '', '', 'http://localhost:4000/resources/uploads/nav/nav-slot-9.png', 0, 0, 0, 0, 0, 2, '2021-11-23 05:24:09', '2021-12-03 18:05:24'),
(25, 'Butterfly Lovers', 1, '/slot/butterfly-lovers', '', '', 'http://localhost:4000/resources/uploads/nav/nav-slot-10.png', 0, 0, 0, 0, 0, 2, '2021-11-23 05:27:30', '2021-12-03 18:05:29'),
(26, 'Crazy Time', 2, '/casino/crazy-time', '', '', 'http://localhost:4000/resources/uploads/nav/nav-casino-1.png', 0, 0, 0, 0, 0, 3, '2021-11-23 05:29:14', '2021-12-03 18:05:43'),
(27, 'Lightning Roulette', 2, '/url/lightning-roulette', '', '', 'http://localhost:4000/resources/uploads/nav/nav-casino-2.png', 0, 0, 0, 0, 0, 3, '2021-11-23 05:33:14', '2021-12-03 18:05:48'),
(28, 'Buffalo Blitz', 2, '/casino/buffalo-blitz', '', '', 'http://localhost:4000/resources/uploads/nav/nav-casino-3.png', 0, 0, 0, 0, 0, 3, '2021-11-23 05:34:43', '2021-12-03 18:05:54'),
(29, 'Gonzos Treasure Hunt', 2, '/casino/gonzos-treasure-hunt', '', '', 'http://localhost:4000/resources/uploads/nav/nav-casino-4.png', 0, 0, 0, 0, 0, 3, '2021-11-23 05:35:19', '2021-12-03 18:05:59'),
(30, 'Live Games', 2, '/casino/live-games', '', '', 'http://localhost:4000/resources/uploads/nav/nav-casino-5.png', 0, 0, 0, 0, 0, 3, '2021-11-23 05:37:30', '2021-12-03 18:06:11'),
(31, 'Roulette', 2, '/casino/roulette', '', '', 'http://localhost:4000/resources/uploads/nav/nav-casino-6.png', 0, 0, 0, 0, 0, 3, '2021-11-23 05:37:56', '2021-12-03 18:06:16'),
(32, 'Auto Roulette', 2, '/url/auto-roulette', '', '', 'http://localhost:4000/resources/uploads/nav/nav-casino-7.png', 0, 0, 0, 0, 0, 3, '2021-11-23 05:38:44', '2021-12-03 18:06:20'),
(33, 'Cash Or Crash', 2, '/casino/cash-or-crash', '', '', 'http://localhost:4000/resources/uploads/nav/nav-casino-8.png', 0, 0, 0, 0, 0, 3, '2021-11-23 05:39:59', '2021-12-03 18:06:27'),
(34, 'VIP BlackJack', 2, '/casino/vip-black-jack', '', '', 'http://localhost:4000/resources/uploads/nav/nav-casino-9.png', 0, 0, 0, 0, 0, 3, '2021-11-23 05:42:55', '2021-12-03 18:06:33'),
(35, 'Dream Catcher', 2, '/casino/dream-catcher', '', '', 'http://localhost:4000/resources/uploads/nav/nav-casino-10.png', 0, 0, 0, 0, 0, 3, '2021-11-23 05:43:32', '2021-12-03 18:06:44'),
(36, 'VIP BlackJack With Surrender', 2, '/casino/vip-black-jack-with-surrender', '', '', 'http://localhost:4000/resources/uploads/nav/nav-casino-11.png', 0, 0, 0, 0, 0, 3, '2021-11-23 05:44:16', '2021-12-03 18:06:49'),
(37, 'Andar Bahar', 2, '/casino/andar-bahar', '', '', 'http://localhost:4000/resources/uploads/nav/nav-casino-12.png', 0, 0, 0, 0, 0, 3, '2021-11-23 05:44:48', '2021-12-03 18:06:54');

-- --------------------------------------------------------

--
-- Table structure for table `Payment`
--

CREATE TABLE `Payment` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `depositBonusId` tinyint(4) NOT NULL DEFAULT 0,
  `coinId` tinyint(4) NOT NULL DEFAULT 0,
  `coinName` varchar(255) NOT NULL,
  `requestId` varchar(255) NOT NULL,
  `price` decimal(24,3) DEFAULT 0.000,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Payment`
--

INSERT INTO `Payment` (`id`, `userId`, `depositBonusId`, `coinId`, `coinName`, `requestId`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 2, 0, 4, 'AMP', 'naiLqZ8H3Gqmh5DDBt1I', '79.998', '2021-12-09 07:53:04', '2021-12-09 08:30:42'),
(2, 2, 0, 2, 'AAVE', 'tuiHZPn680FLRbnw5gXY', '91.663', '2021-12-09 08:31:13', '2021-12-10 02:48:01'),
(3, 2, 0, 3, 'ADA', 'SGxdu2ogvVKs1t1aMGvq', '224.991', '2021-12-10 02:49:24', '2021-12-10 03:35:21'),
(4, 2, 0, 5, 'AMPL', 'GlTJ9WjQRkpqujwFVWiX', '13.332', '2021-12-10 03:35:47', '2021-12-10 03:38:44'),
(5, 2, 0, 5, 'AMPL', '0TBuIP1LAkw5PAWspUgQ', '4.444', '2021-12-10 07:23:40', '2021-12-10 07:23:40'),
(6, 2, 1, 5, 'AMPL', 'i7cUC7Y805QT37E9eHdA', '4.444', '2021-12-10 07:24:33', '2021-12-10 07:24:33');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `depositCoinId` tinyint(4) NOT NULL DEFAULT 1,
  `topCoinId` tinyint(4) NOT NULL DEFAULT 1,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `profilePicURL` longtext DEFAULT NULL,
  `social` tinyint(4) NOT NULL DEFAULT 0,
  `mobile` varchar(255) DEFAULT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'GUEST',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`id`, `depositCoinId`, `topCoinId`, `firstName`, `lastName`, `name`, `email`, `hash`, `profilePicURL`, `social`, `mobile`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 'Senior', 'DevKing', 'Senior DevKing', 'seniordevking@gmail.com', '$2a$10$DiBo4xMx.tg0VQHOMZWxB.h4LpVGCkDFytlpIyosQ1ISeC5p73Zgm', 'https://lh3.googleusercontent.com/a/AATXAJzyVXyYSQY21_9Na9R3kfPN1u1-o5UinU6PmNjL=s96-c', 1, NULL, 'SA', '2021-11-20 21:14:20', '2021-11-20 21:14:20'),
(2, 5, 4, 'Robert', 'Johnson', 'RJ988', 'robertjhonson988@gmail.com', '$2a$10$kUtt21n2/lL6JaA5o0p6BONJ/3p3JzSjIhS52rXY0MotNGvDU0ZSG', 'http://localhost:4000/resources/uploads/users/users-10.jpg', 0, NULL, 'ADMIN', '2021-11-19 08:12:03', '2021-12-10 03:38:32'),
(3, 1, 1, 'somi', 'Hello', 'somi0321', 'somi0321@gmail.com', '$2a$10$hS1shrBK6o2xw8DukOs5d.bzkzZxUYnpvTiQKMGni4eNRg9Y.hpgm', NULL, 0, NULL, 'GUEST', '2021-11-20 21:08:47', '2021-11-20 21:08:47'),
(4, 1, 1, 'King', 'App', 'King App', 'seniordev119@gmail.com', '$2a$10$u59hp4FA5WNrSGTnoAM48Oc4.GcpKlSXCr/4yypmOEf1kbwQW6q7e', 'https://lh3.googleusercontent.com/a/AATXAJx3fT9YwL0z0g8KskbUqMQZRFMIdPVNBkdRtfQj=s96-c', 1, NULL, 'GUEST', '2021-11-19 08:09:04', '2021-11-19 08:09:04'),
(13, 1, 1, 'sergiu', 'bulimaga', 'sergiu.b', 'sergiu.bulimaga@gmail.com', '$2a$10$o0biZMIJ/9D0fXtfR4ApReYpb8PQpQJRo4t5ue7BzPgk4a5cfLmGK', NULL, 0, NULL, 'GUEST', '2021-12-08 05:51:11', '2021-12-08 05:51:11'),
(16, 1, 1, 'somi', 'esrgserg', 'serhserh', 'robertjhonssergsergon988@gmail.com', '$2a$10$bTQ9mQGZ2CiHydFJBm7sd.3Bxgbb6UaFicnIxeMpwwk4lsNz8p.dS', NULL, 0, NULL, 'GUEST', '2021-12-09 02:28:10', '2021-12-09 02:28:10');

-- --------------------------------------------------------

--
-- Table structure for table `UserCoin`
--

CREATE TABLE `UserCoin` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `coinId` int(11) DEFAULT NULL,
  `jbPrice` decimal(24,3) DEFAULT 100.000,
  `usdPrice` decimal(24,3) DEFAULT 100.000,
  `status` tinyint(4) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `UserCoin`
--

INSERT INTO `UserCoin` (`id`, `userId`, `coinId`, `jbPrice`, `usdPrice`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 2, 1, '100.000', '100.000', 1, '2021-12-09 00:34:11', '2021-12-09 00:34:11'),
(2, 2, 2, '116.666', '100.000', 1, '2021-12-09 03:36:03', '2021-12-10 02:48:01'),
(3, 2, 3, '324.991', '100.000', 1, '2021-12-09 03:36:18', '2021-12-10 03:35:21'),
(4, 2, 4, '100.000', '100.000', 1, '2021-12-09 03:36:19', '2021-12-10 03:01:47'),
(5, 1, 1, '100.000', '100.000', 1, '2021-12-09 00:36:46', '2021-12-09 00:36:46'),
(6, 3, 1, '100.000', '100.000', 1, '2021-12-09 00:37:04', '2021-12-09 00:37:04'),
(7, 4, 1, '100.000', '100.000', 1, '2021-12-09 00:37:04', '2021-12-09 00:37:04'),
(8, 13, 1, '100.000', '100.000', 1, '2021-12-09 00:37:41', '2021-12-09 00:37:41'),
(9, 16, 1, '100.000', '100.000', 1, '2021-12-09 00:37:54', '2021-12-09 00:37:54'),
(10, 2, 5, '22.220', '0.000', 1, '2021-12-10 03:01:48', '2021-12-10 07:24:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Coin`
--
ALTER TABLE `Coin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `DepositCoin`
--
ALTER TABLE `DepositCoin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Game`
--
ALTER TABLE `Game`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Payment`
--
ALTER TABLE `Payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `UserCoin`
--
ALTER TABLE `UserCoin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `coinId` (`coinId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Coin`
--
ALTER TABLE `Coin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `DepositCoin`
--
ALTER TABLE `DepositCoin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=247;

--
-- AUTO_INCREMENT for table `Game`
--
ALTER TABLE `Game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `Payment`
--
ALTER TABLE `Payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `UserCoin`
--
ALTER TABLE `UserCoin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `UserCoin`
--
ALTER TABLE `UserCoin`
  ADD CONSTRAINT `usercoin_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `User` (`id`),
  ADD CONSTRAINT `usercoin_ibfk_2` FOREIGN KEY (`coinId`) REFERENCES `Coin` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
