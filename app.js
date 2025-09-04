import express from "express";
const app = express();
export default app;
import employeesRouter from "#api/employees"

app.use(express.json());

app.route("/").get ((req, res) => {
    res.send("Welcome to the Fullstack Employees API.");
});

app.use("/employees", employeesRouter);

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send("Sorry! Something went wrong");
})
