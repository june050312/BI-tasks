const express = require("express");
const methodOverride = require("method-override");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(methodOverride("_method"));

app.use("/user", require("./routes"));

app.listen(3000, () => {
    console.log("App listening on port 3000");
})