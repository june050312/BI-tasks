const express = require("express");
const route = express.Router();
const asyncHandler = require("express-async-handler");

const DB = []

// POST /
route.post("/", asyncHandler((req, res) => {
    const userData = req.body
    DB.push(userData)

    console.log(DB)
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