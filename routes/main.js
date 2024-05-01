const express = require("express");
const route = express.Router();
const asyncHandler = require("express-async-handler");

const DB = [
    {
        name: "admin",
        email: "admin@abc.com",
        password: "1234",
        age: "20",
        createdAt: 1234567890
    }
]

// POST /
route.post("/", asyncHandler((req, res) => {
    const userData = req.body
    DB.push(userData)

    console.log(DB)
}))

// GET /
route.get("/", asyncHandler((req, res) => {
    res.send(DB)
}))

// PUT /
route.put("/", asyncHandler((req, res) => {
    res.send("put")
}))

// DELETE /
route.delete("/", asyncHandler((req, res) => {
    res.send("delete")
}))

// GET /:name
route.get("/:name", asyncHandler((req, res) => {
    const userName = req.params.name;
    const thisUser = DB.filter(data => data.name.includes(userName))
    res.send(thisUser)
}))

// PUT /:name

module.exports = route;