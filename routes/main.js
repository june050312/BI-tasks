const express = require("express");
const route = express.Router();
const asyncHandler = require("express-async-handler");

const DB = [
    {
        name: "admin",
        email: "admin@abc.com",
        password: "1234",
        age: 20,
        createdAt: 20240430
    }
]

// POST /
route.post("/", asyncHandler((req, res) => {
    res.send("post")
}))

// GET /
route.get("/", asyncHandler((req, res) => {
    res.json(DB)
}))

// PUT /
route.put("/", asyncHandler((req, res) => {
    res.send("put")
}))

// DELETE /
route.delete("/", asyncHandler((req, res) => {
    res.send("delete")
}))

module.exports = route;