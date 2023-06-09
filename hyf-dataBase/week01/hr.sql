create database newHR;
use newHR;

-- Create the employee table
CREATE TABLE employee (
  employee_id INT PRIMARY KEY auto_increment,
  Name VARCHAR(50),
  department_id INT,
  email VARCHAR(100),
  hire_date DATE,
   INDEX idx_department (department_id)
);

-- Create the locations table
CREATE TABLE locations (
  location_id INT PRIMARY KEY,
  city VARCHAR(50),
  country VARCHAR(50),
   FOREIGN KEY (location_id) REFERENCES employee(department_id)
  
);

-- Insert rows into the employee table
INSERT INTO employee (Name,department_id, email, hire_date)
VALUES
 ('mohammed laith', 1, 'mohammed.laith@example.com', '2023-01-10'),
  ('maryam ahmed', 2, 'maryam.ahmed@example.com', '2023-02-15'),
  ('Jakob mohammed', 2, 'jakob.mohammed@example.com', '2023-03-20'),
  ('Duha laith', 4, 'duha.laith@example.com', '2023-04-25'),
  ('Ali Harith', 3, 'ali.harith@example.com', '2023-05-01'),
  ('Luma Salman', 4, 'luma.salman@example.com', '2023-06-05'),
  ('Mohammed KHaleel', 2, 'mohammed.khaleel@example.com', '2023-07-10'),
  ('Mina Abdullah', 3, 'mina.abdullah@example.com', '2023-08-15'),
  ('Rama saif', 1, 'rama.saif@example.com', '2023-09-20'),
  ('Doua khalid', 2, 'doua.khalid@example.com', '2023-10-25'),
  ('Lia gammal', 2, 'lia.gammal@example.com', '2023-11-01'),
  ('Remas moslih', 4, 'remas.moslih@example.com', '2023-12-05'),
  ('Aya Ahmed', 2, 'aya.ahmed@example.com', '2024-01-10'),
  ('Roya talib', 3, 'roya.talib@example.com', '2024-02-15'),
  ('Reyam talib', 1, 'reyam.talib@example.com', '2024-03-20');
-- Insert more rows as needed

-- Insert rows into the locations table
INSERT INTO locations (location_id, city, country)
VALUES
  (1, 'Baghdad',"Iraq"),
  (2, 'Amman',"Jordan"),
  (3, 'riyad',"KSA"),
  (4, 'ABU DABI','UAE');
  

