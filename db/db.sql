CREATE DATABASE FilesApp;

USE FilesApp;

CREATE TABLE users (
    username VARCHAR(50) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    encrypt_password VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL
);

INSERT INTO users(username, name, encrypt_password, email) VALUES ('user_test', 'test', 'test', 'test@test.com');