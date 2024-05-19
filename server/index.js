const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.listen(3001, () => {
  console.log("SERVER STARTED..");
});
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  database: "telusko",
  user: "root",
  password: "Deepak@2003",
});

app.get("/users", (req, res) => {
  const query = "SELECT * FROM devs";
  connection.query(query, (error, result) => {
    if (error) return res.json(error);
    return res.json(result);
  });
});

app.post("/user", (req, res) => {
  const query = "INSERT INTO devs (`name`,`pwd`) VALUES (?)";
  const values = [req.body.name, req.body.pwd];
  connection.query(query, [values], (error) => {
    if (error) return res.json(error);
    return res.json("record inserted successfully");
  });
});

app.delete("/user/:name", (req, res) => {
  const name = req.params.name;
  const query = "DELETE FROM devs WHERE name = ?";
  connection.query(query, [name], (error) => {
    if (error) return res.json(error);
    return res.json("user deleted successfully");
  });
});

connection.connect(() => {
  console.log("database connected");
});
