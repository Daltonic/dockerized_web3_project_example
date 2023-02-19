-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 29, 2023 at 03:02 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `monsternft`
--

-- --------------------------------------------------------

--
-- Table structure for table `mints`
--

CREATE TABLE `mints` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` float NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mints`
--

INSERT INTO `mints` (`id`, `name`, `description`, `price`, `image`) VALUES
(2, 'Brut Monkey', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 2.4, 'https://ipfs.io/ipfs/bafkreifknnsn2q6yb5uxwemfyybtztneio34fy7fkekizix7txwxsmmghi'),
(3, 'Killer Monkey', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 1.9, 'https://ipfs.io/ipfs/bafkreibo2rwyocbjxbur4qwndheriv32hlfznou73vn7bxcs3sxxvmejzq'),
(4, 'Annoying Monkey', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 2.2, 'https://ipfs.io/ipfs/bafkreib2i7plxknebnwbbz5htvf2vpja5a5c66ki3dts2fczldyvfpi64q'),
(5, 'Monster Sinester', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 3.1, 'https://ipfs.io/ipfs/bafkreicwyfvhvn5v4otaqdiqkcd7rdsnnku4tlyuv6sbskf5zsxsflihwi'),
(6, 'monster gangstar', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 1.2, 'https://ipfs.io/ipfs/bafkreiaknywlvb3aed5ktva6yjgzx3yg752f4ahikbqcoek4cqqg6rlrqi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mints`
--
ALTER TABLE `mints`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mints`
--
ALTER TABLE `mints`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
