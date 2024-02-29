const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: "true",
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connected to the MongoDB:-", err));

const app = express();
const PORT = process.env.PORT || 4000;

/* middleware */
app.use(express.json()); // it is being used for the post request
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // for passing cors request

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api/v1", require("./src/routes/login.js"));

app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
