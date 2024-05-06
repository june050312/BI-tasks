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
route.put("/:name", asyncHandler((req, res) => {
    const userName = req.params.name;
    const thisUser = DB.filter(data => data.name.includes(userName))
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

// DELETE /:name
route.delete("/:name", asyncHandler((req, res) => {
    const userName = req.params.name;
    const thisUser = DB.filter(data => data.name.includes(userName))

    DB.forEach((data, i) => {
        if (data.name == thisUser[0].name && data.password == thisUser[0].password) {
            DB.splice(i, 1)
        }
    })
}))

module.exports = route;