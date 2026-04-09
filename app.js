import express from "express";
const app = express();
export default app;

// TODO: this file!
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", employeeRouter);

app.use((error, request, response, next) => {
  response.status(500).send('Sorry! Something went wrong.');
});
