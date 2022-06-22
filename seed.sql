USE employee_db;

INSERT INTO department (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', '100000', '1'),
('Salesperson', '80000', '1'),
('Lead Engineer', '15000', '2' ),
('Software Enginner', '120000', '2'),
('Account Manager', '1600000', '3'),
('Accountant', '125000', '3'),
('Legal Team Lead', '250000', '4'),
('Lawyer', '1900000', '4');

INSERT INTO employee (firstname, lastname, role_id, manage_id)
VALUES
('Yonis', 'Hussein', '1', NULL),
('Mike', 'Chan', '2', '1'),
('Ashley', 'Rodriguez', '3', NULL),
('Kelvin', 'Tupik', '4', '3'),
('Kunal', ' Singh', '5', NULL),
('Malia', 'Brown', '6', '5'),
('Sarah', 'Lourd', '7', NULL),
('Tom', 'Allen', '8', '7'),


