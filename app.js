const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/user", require("./routes/main"));

app.listen(4000, () => {
    console.log("App listening on port 4000");
})