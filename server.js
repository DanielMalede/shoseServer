const express = require("express");
const cors = require("cors");
const adidasRouter = require("./routes/adidas-router");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get('/adidas',adidasRouter)

app.get("/", (req, res) => {
  res.send("success");
});

app.listen(port, () => {
  console.log(`server is ${port}`);
});
