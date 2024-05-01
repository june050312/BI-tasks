const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const port = 4000

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/user", require("./routes/main"));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})