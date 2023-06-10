
# MyToDoApp
This is a simple application called MyToDoApp that helps you manage your tasks. It provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on tasks stored in a MySQL database.


## The content

Table of Contents
Installation
Usage
API Endpoints
Database Structure
Contributing
Acknowledgments
## Installation

Make sure you have Node.js and MySQL installed on your machine.
Clone this repository: git clone https://github.com/Hiba-Khaleel/FooCoding/DATABASE-/week03
Change to the project directory: cd week03
Install the dependencies: npm install
    
## Usage

Start the MySQL server.
Create a new MySQL database named mytodoapp.
Import the provided SQL file into the mytodoapp database. You can use the SQL commands directly from the command line.
Modify the MySQL connection configuration in the app.js file to match your MySQL server settings.
Start the application: node server.js.
Access the application by opening a web browser and navigating to http://localhost:3000.
## API Endpoints

The following API endpoints are available:

GET /tasks: Fetches all tasks.
GET /tasks/:taskId: Fetches a specific task by ID.
POST /tasks: Creates a new task.
PUT /tasks/:taskId: Updates an existing task by ID.
DELETE /tasks/:taskId: Deletes a task by ID.
For detailed usage and example requests/responses, please refer to the API documentation.
## Database Structure

The MySQL database mytodoapp has the following tables:

Users: Stores user information.
Categories: Stores task categories.
Tasks: Stores task information.
FinishedTasks: Tracks finished tasks.
Audit: Tracks changes made to task reminder dates.
For a detailed schema and sample data, refer to the provided SQL file.
## Authors

Hiba Khaleel 


## Acknowledgements


 This project was developed using MySQL Workbench and Node.js with Express framework.










