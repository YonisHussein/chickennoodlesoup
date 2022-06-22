DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAT(30) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    salary DECIMAL(10.2) NULL,
    department_id INT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT
    firstname VARCHAR(30) NULL,
    lastname VARCHAR(30) NULL,
    role_id INT NULL,
    manage_id INT NULL,
    PRIMARY KEY (id)
);