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
    res.json(thisUser)
}))

// PUT /:id
route.put("/:id", asyncHandler((req, res) => {
    const userId = req.params.id;
    const thisUser = DB.filter(data => data.createdAt == userId)
    const thisIndex = thisUser.createdAt

    isEmpty(req.body.name) ? thisUser[0].name : thisUser[0].name = req.body.name
    isEmpty(req.body.email) ? thisUser[0].email : thisUser[0].email = req.body.email
    isEmpty(req.body.password) ? thisUser[0].password : thisUser[0].password = req.body.password
    isEmpty(req.body.age) ? thisUser[0].age : thisUser[0].age = req.body.age

    thisUser[0].createdAt = req.body.createdAt

    console.log(thisUser)

    DB.forEach((data, i) => {
        if (data.createdAt == thisIndex) {
            DB.splice(i, 1, thisUser)
        }
    })
}))

// DELETE /:id
route.delete("/:id", asyncHandler((req, res) => {
    const userId = req.params.id;
    const thisUser = DB.filter(data => data.createdAt == userId)

    DB.forEach((data, i) => {
        if (data.name == thisUser[0].name && data.password == thisUser[0].password) {
            DB.splice(i, 1)
        }
    })
}))

module.exports = route;