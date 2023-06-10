CREATE DATABASE mytodoapp;
USE mytodoapp;

CREATE TABLE Users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255),
  user_email VARCHAR(255)
);

CREATE TABLE Categories (
  category_id INT PRIMARY KEY AUTO_INCREMENT,
  category_name VARCHAR(255)
);

CREATE TABLE Tasks (
  task_id INT PRIMARY KEY AUTO_INCREMENT,
  task_name VARCHAR(255),
  created_date DATE,
  deadline DATE,
  category_id INT,
  user_id INT,
  reminder_date DATETIME,
  FOREIGN KEY (category_id) REFERENCES Categories(category_id),
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE FinishedTasks (
  finished_task_id INT PRIMARY KEY AUTO_INCREMENT,
  task_id INT,
  finished BOOLEAN,
  FOREIGN KEY (task_id) REFERENCES Tasks(task_id)
);

INSERT INTO Users (username, user_email)
VALUES
  ('hiba khaleel', 'hiba@gmail.com'),
  ('mary walson', 'mary@gmail.com'),
  ('mina', 'mina@gmail.com');

INSERT INTO Categories (category_name)
VALUES
  ('Work'),
  ('Personal'),
  ('Study');

INSERT INTO Tasks (task_name, created_date, deadline, category_id, user_id)
VALUES
  ('Finish report', '2023-06-01', '2023-06-05', 1, 1),
  ('Buy groceries', '2023-06-11', '2023-06-12', 2, 2),
  ('Read book', '2023-06-09', '2023-06-30', 3, 1);

INSERT INTO FinishedTasks (task_id, finished)
VALUES
  (1, true),
  (2, false),
  (3, false);

CREATE TABLE Audit (
  task_id INT,
  old_reminder_date DATETIME,
  new_reminder_date DATETIME,
  change_date DATETIME,
  FOREIGN KEY (task_id) REFERENCES Tasks(task_id));
