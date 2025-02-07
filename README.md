# Full Stack Employee Management System

## Project Overview
This is a Full Stack Employee Management System designed to manage employee details efficiently. The application allows users to:
- View all employees
- Add new employees
- Edit existing employee information
- Delete employee records
- View detailed information about a specific employee

The system is built using **Node.js** for the backend, **React** for the frontend, and **MongoDB** for the database.

---

## Features
- **Frontend**: Provides an intuitive interface for managing employee records.
- **Backend**: RESTful API endpoints to handle CRUD operations.
- **Database**: MongoDB for secure and efficient data storage.


---

## Installation Instructions

### Prerequisites
Ensure the following are installed on your system:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- A package manager like `npm` or `yarn`

### Steps
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>

2. **Navigate to the project directory**:
   ```bash
   cd employee-management-system

3. **Install backend dependencies:**
   ```bash
   cd backend
   npm install

4. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install

5. **Configure environment variables:**
    Create a .env file in the backend directory.
    Add the following variables:
    ```bash
    MONGO_URI=mongodb://localhost:27017/employees
    PORT=8081

6. **Start the backend server**
   ```bash
   cd backend
   npm start

7. **Start the frontend server**
   ```bash
   cd frontend
   npm run dev

8. **Open your browser and navigate to http://localhost:3000 to use the application.**


**USAGE**

**Navigation**

Home Page: View a list of all employees and perform actions like edit or delete.

Add Employee Page: Fill out a form to add a new employee.

Edit Employee Page: Modify an existing employee\u2019s details.

Employee Details Page: View detailed information about a selected employee.

**CRUD Operations**

Add Employee: Navigate to the Add Employee page, fill in the form, and submit.

Edit Employee: Click the edit button on the home page for an employee, update the form, and save changes.

Delete Employee: Click the delete button on the home page for an employee.

View Employee Details: Click on an employee\u2019s name in the home page list.



**API Endpoints**

**Base URL**

http://localhost:5000/api/employees



**Method	Endpoint	Description**

POST	/	Add a new employee

GET	/	Retrieve all employee records

GET	/:empId	Retrieve details of a specific employee

PUT	/:empId	Update an employee\u2019s details

DELETE	/:empId	Delete an employee

