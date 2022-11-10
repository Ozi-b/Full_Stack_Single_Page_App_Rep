const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3000;
const { Pool } = require("pg");
const connectionString =
  "postgressql://postgres:docker@127.0.01:5432/automobiles";

const pool = new Pool({
  connectionString: connectionString,
});
pool.connect();
app.use(express.json());

app.get("/api/automobiles/cars", (req, res) => {
  async function getAll() {
    try {
      const result = await pool.query("SELECT * FROM cars");
      console.log(result.rows);
      res.send(result.rows);
    } catch (e) {
      console.error(e.stack);
    }
  }
  getAll();
});

app.get("/api/automobiles/cars/:id", (req, res) => {
  async function getId() {
    try {
      let queryString = "SELECT * FROM cars WHERE id = $1";
      const result = await pool.query(queryString, [req.params.id]);
      console.log(result);
      res.send(result.rows);
    } catch (e) {
      console.error(e.stack);
    }
  }
  getId();
});

app.post("/api/automobiles/cars", (req, res) => {
  async function inputCar() {
    try {
      let queryString = `INSERT INTO cars (manufacture, model, color, year, MSRP) 
      VALUES ('${req.body.manufacture}','${req.body.model}', '${req.body.color}', 
      '${req.body.year}', '${req.body.MSRP}') RETURNING *`;
      const result = await pool.query(queryString);
      console.log(result);
      res.send(result.rows);
    } catch (e) {
      console.error(e.stack);
    }
  }
  inputCar();
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
