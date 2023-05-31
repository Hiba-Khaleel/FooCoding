CREATE database todo;
use todo;

CREATE TABLE Users (
  user_id INT PRIMARY KEY,
  username VARCHAR(255),
  user_email VARCHAR(255)
);

CREATE TABLE Categories (
  category_id INT PRIMARY KEY,
  category_name VARCHAR(255)
);

CREATE TABLE Tasks (
  task_id INT PRIMARY KEY,
  task_name VARCHAR(255),
  created_date DATE,
  deadline DATE,
  category_id INT,
  user_id INT,
  FOREIGN KEY (category_id) REFERENCES Categories(category_id),
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE FinishedTasks (
  finished_task_id INT PRIMARY KEY,
  task_id INT,
  completion_date DATE,
  FOREIGN KEY (task_id) REFERENCES Tasks(task_id)
);
