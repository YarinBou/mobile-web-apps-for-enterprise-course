let path = require("path");
let router = require("express").Router();
const express = require('express');

router.use(express.static(path.join(__dirname, './public')));


router.get("/calc.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./calc.html"));
});
router.get("/readme.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/readme.html"));
});

router.get("/test.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/test.html"));
});

module.exports = router;
