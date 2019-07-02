const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// database

require("./db/mongoose");

// router

const messageRouter = require("./routers/message");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(messageRouter);

app.listen(port, () => console.log(`Listening to port ${port}.`));
