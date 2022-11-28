const dotenv = require("dotenv");
dotenv.config();
const port = process.env.APP_PORT || 6969

require("./database")

const express = require("express");
const morgan = require("morgan")

const app = express();

const routes = require("./routes")

app.use(morgan("dev"))
app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`Server Listening in port ${port} `);
});