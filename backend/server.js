const express =  require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database:"crud"
  }
)

app.post('/login', (resquest, response) => {
  const sql = "select * from login where username = ? and password = ?";
  const values = [
    req.body.email,
    req.body.password,
  ]

  db.query(sql, [values], (err,data) => {
    if(err) return response.json("Login Failed");
    return response.json(data);
  })
})

app.listen(3000, () => {
  console.log("Listening ...");
})