// Budget API

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const bud = require("./budget.json");
console.log(bud)

app.use("/", express.static("public"));

app.get("/budget", (req, res) => {
  res.json(bud);
});

app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
});
