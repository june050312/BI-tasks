const express = require("express");
const route = express.Router();
const asyncHandler = require("express-async-handler");

const DB = [
    {
        id: "admin",
        pw: "1234"
    },
    {
        id: "LinZaoMing",
        pw: "LZM666666"
    },
    {
        id: "ZohnChina",
        pw: "BingChiling"
    },
    {
        id: "IkuyoKita",
        pw: "KitaKita"
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