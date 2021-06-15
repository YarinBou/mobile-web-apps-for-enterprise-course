const express = require('express');
const app = express();
const memory = require('memory');

app.post('/start', (req, res) => {
    try {
        memory.M = 0;
        res.json({msg: "The server has been started"});

    } catch (err) {
        res.status(500).json({msg: err.message})
    }
});

app.post('/calc/add/:num', (req, res) => {
    try {
        let num = Number(req.params.num);
        memory.M += num;
        res.status(200);
        res.json({msg: memory.M.toString()});
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
});

app.post('/calc/sub/:num', (req, res) => {
    try {
        memory.M -= Number(req.params.num);
        res.status(200);
        res.json({msg: memory.M.toString()});
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
});

app.put('/calc/multiply/:num', (req, res) => {
    try {
        memory.M *= Number(req.params.num);
        res.status(200);
        res.json({msg: memory.M.toString()});
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
});


app.put('/calc/divide/:num', (req, res) => {
    try {
        let num = Number(req.params.num);
        if (num === 0) {
            res.status(500).send("Error: Divide by zero")
            return
        }
        memory.M = memory.M / num;
        res.status(200);
        res.json({msg: memory.M.toString()});
    } catch (err) {
        res.status(500).json({msg: err.message});
    }

});

app.get('/calc/M', (req, res) => {
    try {
        res.status(200);
        res.json({msg: memory.M.toString()});
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
});

app.post('/calc/reset', (req, res) => {
    try {
        memory.M = 0;
        res.status(200);
        res.json({msg: memory.M.toString()});
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
});

app.use(function (req, res, next) {
    res.status(404).send("Unknown Request, Please try again")
});
module.exports = app;
