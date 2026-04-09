DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
    id SERIAL NOT NULL,
    name TEXT NOT NULL,
    birthday DATE NOT NULL,
    salary INTEGER NOT NULL
);
