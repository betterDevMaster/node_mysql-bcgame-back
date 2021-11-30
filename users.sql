-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2021 at 08:40 AM
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
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
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
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `name`, `email`, `hash`, `profilePicURL`, `social`, `mobile`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Senior', 'DevKing', 'Senior DevKing', 'seniordevking@gmail.com', '$2a$10$DiBo4xMx.tg0VQHOMZWxB.h4LpVGCkDFytlpIyosQ1ISeC5p73Zgm', 'https://lh3.googleusercontent.com/a/AATXAJzyVXyYSQY21_9Na9R3kfPN1u1-o5UinU6PmNjL=s96-c', 1, NULL, 'SA', '2021-11-20 21:14:20', '2021-11-20 21:14:20'),
(2, 'Robert', 'Johnson', 'RJ988', 'robertjhonson988@gmail.com', '$2a$10$kUtt21n2/lL6JaA5o0p6BONJ/3p3JzSjIhS52rXY0MotNGvDU0ZSG', NULL, 0, NULL, 'ADMIN', '2021-11-19 08:12:03', '2021-11-22 02:46:35'),
(3, 'somi', 'Hello', 'somi0321', 'somi0321@gmail.com', '$2a$10$hS1shrBK6o2xw8DukOs5d.bzkzZxUYnpvTiQKMGni4eNRg9Y.hpgm', NULL, 0, NULL, 'GUEST', '2021-11-20 21:08:47', '2021-11-20 21:08:47'),
(4, 'King', 'App', 'King App', 'seniordev119@gmail.com', '$2a$10$u59hp4FA5WNrSGTnoAM48Oc4.GcpKlSXCr/4yypmOEf1kbwQW6q7e', 'https://lh3.googleusercontent.com/a/AATXAJx3fT9YwL0z0g8KskbUqMQZRFMIdPVNBkdRtfQj=s96-c', 1, NULL, 'GUEST', '2021-11-19 08:09:04', '2021-11-19 08:09:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
