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

app.listen(3000, () => {
  console.log("Listening ...");
})