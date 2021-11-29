const express = require("express");
const Books = require("../models/Books");
const router = express.Router();
const mongoose = require("mongoose");
const Books = require("../models/Books");

router.post("/book/", (req, res, next) => {
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

module.exports = router;