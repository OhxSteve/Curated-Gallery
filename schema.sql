CREATE DATABASE Gram;

USE Gram;

CREATE TABLE Users (
  id int NOT NULL AUTO_INCREMENT,
  photo varchar(100) NOT NULL,
  user varchar(20) NOT NULL,
  likes int NOT NULL,
  createdOn timestamp NOT NULL DEFAULT current_timestamp,
  product int NOT NULL
  PRIMARY KEY (id)
);
