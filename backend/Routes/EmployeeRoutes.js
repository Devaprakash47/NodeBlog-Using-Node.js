const { createEmployee, getAllEmployees, getEmployeeById, deleteEmployeeById, updateEmployeeById } = require("../Controllers/EmployeeController");
const multer = require("multer");
const routes = require("express").Router();

const upload = multer();

routes.get('/', getAllEmployees)

routes.post('/', upload.none(),createEmployee
)

routes.put('/:id', upload.none(),updateEmployeeById
)

routes.get("/:id", getEmployeeById);

routes.delete("/:id", deleteEmployeeById);

module.exports = routes;
