const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Create a MySQL connection pool
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Hiba.Khaleel1998',
  database: 'mytodoapp',
});


// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET all tasks
app.get('/tasks', (req, res) => {
  const query = 'SELECT * FROM Tasks';

  connection.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching tasks:', err);
      res.status(500).json({ error: 'Server error' });
      return;
    }

    res.json(result);
  });
});

// GET a specific task
app.get('/tasks/:taskId', (req, res) => {
  const { taskId } = req.params;
  const query = 'SELECT * FROM Tasks WHERE task_id = ?';
  const values = [taskId];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error fetching task:', err);
      res.status(500).json({ error: 'Server error' });
      return;
    }

    if (result.length === 0) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    res.json(result[0]);
  });
});

// POST a new task
app.post('/tasks', (req, res) => {
  const { task_name, created_date, deadline, category_id, user_id } = req.body;
  const query = 'INSERT INTO Tasks (task_name, created_date, deadline, category_id, user_id) VALUES (?, ?, ?, ?, ?)';
  const values = [task_name, created_date, deadline, category_id, user_id];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error creating task:', err);
      res.status(500).json({ error: 'Server error' });
      return;
    }

    res.status(201).json({ taskId: result.insertId, message: 'Task created successfully' });
  });
});

// PUT (update) a task
app.put('/tasks/:taskId', (req, res) => {
  const { taskId } = req.params;
  const { task_name, created_date, deadline, category_id, user_id } = req.body;
  const query = 'UPDATE Tasks SET task_name = ?, created_date = ?, deadline = ?, category_id = ?, user_id = ? WHERE task_id = ?';
  const values = [task_name, created_date, deadline, category_id, user_id, taskId];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error updating task:', err);
      res.status(500).json({ error: 'Server error' });
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    res.json({ message: 'Task updated successfully' });
  });
});

// DELETE a task
app.delete('/tasks/:taskId', (req, res) => {
  const { taskId } = req.params;
  const query = 'DELETE FROM Tasks WHERE task_id = ?';
  const values = [taskId];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error deleting task:', err);
      res.status(500).json({ error: 'Server error' });
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    res.json({ message: 'Task deleted successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
