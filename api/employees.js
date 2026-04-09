import express, { request, response } from "express";
import employees from "./employees";

import {
    createEmployee,
    deleteEmployee,
    getEmployee,
    getEmployees,
    updateEmployee, 
    } from "#db/queries/employees";

// TODO: this file!
const employeeRouter = express.Router();

employeeRouter.get("/", async (req, res) => {
    const employees = await getEmployees();
    res.send( employees );
});

employeeRouter.post('/', async (req, res, next) => {
    if (!req.body) {
        return response.status(400).send('Request must have a body.');
    }

    const { name, birthday, salary } = req.body;
    if (!name || !birthday || !salary) {
        return response.status(400).send('Missing required field for request.');
    }

    const newEmployee = await createEmployee({ name, birthday, salary });

    response.status(201).send(newEmployee);
});

employeeRouter.param('id', async (req, res, next, id) => {
    const employee = await getEmployee(id);
    if (!employee) {
        return res.status(404).send('Employee not found.')
    }

    req.employee = employee;
    next();
});

employeeRouter.get('/:id', (req, res) => {
    res.send(req.employee);
});

employeeRouter.delete('/:id', async (req, res, next) => {
    await deleteEmployee(req.employee.id);

    res.status(204).send('Employee successfully deleted.');

});

employeeRouter.put('/:id', async (req, res, next) => {
    if (!req.body) {
        return res.status(400).send('Request must have a body.');
    }

    const { name, birthday, salary } = req.body;
    if (!name || !birthday || !salary) {
        return res.status(400).send('Missing required field for request.');
    }

    const employee = await updateEmployee({
        id: req.employee.id,
        name,
        birthday,
        salary,
    });
    res.send(employee);
});


export default employeeRouter;