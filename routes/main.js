const express = require("express");
const route = express.Router();
const asyncHandler = require("express-async-handler");

function isEmpty(str){
    if(typeof str == "undefined" || str == null || str == "")
        return true;
    else
        return false ;
}

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

// GET /:id
route.get("/:id", asyncHandler((req, res) => {
    const userId = req.params.id;
    const thisUser = DB.filter(data => data.createdAt == userId)
    res.json(...thisUser)
}))

// PUT /:id
route.put("/:id", asyncHandler((req, res) => {
    const userId = req.params.id;
    const thisUser = DB.filter(data => data.createdAt == userId)

    for (let prop of ["name", "email", "password", "age"]) {
        isEmpty(req.body[prop]) ? thisUser[0][prop] : thisUser[0][prop] = req.body[prop]
    }

    thisUser[0].createdAt = req.body.createdAt

    DB.forEach((data, i) => {
        if (data.createdAt == userId) {
            DB.splice(i, 1, ...thisUser)
        }
    })
}))

// DELETE /:id
route.delete("/:id", asyncHandler((req, res) => {
    const userId = req.params.id;

    DB.forEach((data, i) => {
        if (data.createdAt == userId) {
            DB.splice(i, 1)
        }
    })
}))

module.exports = route;