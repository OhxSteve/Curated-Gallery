DROP DATABASE IF EXISTS gram;

CREATE DATABASE gram;

USE gram;

CREATE TABLE photos (
  id INT NOT NULL AUTO_INCREMENT,
  photo varchar(100) NOT NULL,
  user varchar(50) NOT NULL,
  likes int NOT NULL,
  posted_on bigint NOT NULL,
  product int NOT NULL,
  PRIMARY KEY (id)
);
