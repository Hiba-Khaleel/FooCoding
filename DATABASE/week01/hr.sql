USE hr;
CREATE TABLE locations (
  department_number INT PRIMARY KEY,
  department_name VARCHAR(30),
  location VARCHAR(30)
);

CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  name VARCHAR(30),
  department_id INT,
  email VARCHAR(50),
  hire_date DATE,
  FOREIGN KEY (department_id) REFERENCES locations(department_number)
);

CREATE INDEX fk_dept_id ON employees (department_id);

SELECT * FROM employees;
SELECT * FROM locations;

INSERT INTO employees (employee_id, name, department_id, email, hire_date)
VALUES
  (1, 'mohammed laith', 1, 'mohammed.laith@example.com', '2023-01-10'),
  (2, 'maryam ahmed', 2, 'maryam.ahmed@example.com', '2023-02-15'),
  (3, 'Jakob mohammed', 2, 'jakob.mohammed@example.com', '2023-03-20'),
  (4, 'Duha laith', 2, 'duha.laith@example.com', '2023-04-25'),
  (5, 'Ali Harith', 2, 'ali.harith@example.com', '2023-05-01'),
  (6, 'Luma Salman', 2, 'luma.salman@example.com', '2023-06-05'),
  (7, 'Mohammed KHaleel', 2, 'mohammed.khaleel@example.com', '2023-07-10'),
  (8, 'Mina Abdullah', 2, 'mina.abdullah@example.com', '2023-08-15'),
  (9, 'Rama saif', 2, 'rama.saif@example.com', '2023-09-20'),
  (10, 'Doua khalid', 2, 'doua.khalid@example.com', '2023-10-25'),
  (11, 'Lia gammal', 2, 'lia.gammal@example.com', '2023-11-01'),
  (12, 'Remas moslih', 2, 'remas.moslih@example.com', '2023-12-05'),
  (13, 'Aya Ahmed', 2, 'aya.ahmed@example.com', '2024-01-10'),
  (14, 'Roya talib', 2, 'roya.talib@example.com', '2024-02-15'),
  (15, 'Reyam talib', 2, 'reyam.talib@example.com', '2024-03-20');

-- Insert 10-20 rows into the locations table
INSERT INTO locations (department_number, department_name, location)
VALUES
  (1, 'Sales', 'Baghdad'),
  (2, 'Marketing', 'Dubai'),
  (3, 'Human Resources', 'Erbil'),
  (4, 'Finance', 'Basra'),
  (5, 'Operations', 'Mosel');
  
SELECT * FROM employees;
SELECT * FROM locations;
  
  

