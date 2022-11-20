const express = require("express");
require("dotenv").config();
require("./config/db").connect();
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT;
const apiRoutes = require("./routes/userRoute");


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);


app.use("/api", apiRoutes());


app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));