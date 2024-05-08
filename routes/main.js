const express = require("express");
const route = express.Router();
const asyncHandler = require("express-async-handler");

function isEmpty(str){
    if(typeof str == "undefined" || str == null || str == "")
        return true;
    else
        return false ;
}

function validation(req, res, next) {
    const userData = req.body

    let check = []

    if (userData.name.length !== 3) {
        check.push("이름이 정확하지 않습니다")
    } if (!userData.email.endsWith("@gmail.com")) {
        check.push("Gmail이 아닙니다")
    } if (userData.password.length < 5) {
        check.push("비밀번호가 5자리보다 작습니다")
    } if (userData.age.length < 20) {
        check.push("나이가 유효하지 않습니다")
    }

    check.length > 0 ? res.send(check) : next()
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
route.post("/", validation, asyncHandler((req, res) => {
    DB.push(req.body)
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