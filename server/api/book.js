const express = require("express");
const Books = require("../models/Books");
const router = express.Router();
const mongoose = require("mongoose");

let books = [
    {name: "Little Bear", author: "Elsa HolmeLund Minarik", pages: 63}
];

router.post("/book/", (req, res, next) => {
    console.log("This is right place");
    Books.findOne({ name: req.body.name }, (err, name) => {
        if(err) return next(err);
        if(!name) {
            new Books({
                name: req.body.name,
                author: req.body.author,
                pages: req.body.pages
            }).save((err) => {
                if(err) return next(err);
                return res.send(req.body);
            });
        } else {
            return res.status(403).send("Database already has that book!");
        }
    });
})

router.get("/book/", (req, res) => {
    console.log("This is some place");
    res.json(books);
});

module.exports = router;