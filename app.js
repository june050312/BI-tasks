const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/", require("./routes/main"));

app.listen(4000, () => {
    console.log("App listening on port 4000");
})