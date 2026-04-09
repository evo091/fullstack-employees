import express from "express";
const app = express();
import employeeRouter from "#api/employees";
export default app;

// TODO: this file!
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Fullstack Employees API.");
});

app.use("/employees", employeeRouter);

app.use((error, request, response, next) => {
  response.status(500).send('Sorry! Something went wrong.');
});
