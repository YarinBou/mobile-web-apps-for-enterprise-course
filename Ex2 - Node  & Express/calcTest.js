const fetch = require('node-fetch');
const app = require("./calc");

function start() {
    return fetch("http://localhost:3000/start/", {method: 'POST'})
        .then(res => {
            if (res.status.toString() === '200') {
                console.log("OK. status: " + res.status);
            } else {
                console.log("FAILURE. status: " + res.status);
            }
            return res.json();
        }).then(body => {
            console.log(body["msg"]);
            return body;
        });
}


function add() {
    return fetch("http://localhost:3000/calc/add/10", {method: 'POST'})
        .then(res => {
            if (res.status.toString() === '200') {
                console.log("OK. status: " + res.status);
            } else {
                console.log("FAILURE. status: " + res.status);
            }
            return res.json();
        })
        .then(body => {
            console.log(body["msg"]);
            return body;
        });
}

function sub() {
    return fetch("http://localhost:3000/calc/sub/6", {method: 'POST'})
        .then(res => {
            if (res.status.toString() === '200') {
                console.log("OK. status: " + res.status);
            } else {
                console.log("FAILURE. status: " + res.status);
            }
            return res.json();
        })
        .then(body => {
            console.log(body["msg"]);
            return body;
        });
}

function multiply() {
    return fetch("http://localhost:3000/calc/multiply/2", {method: 'PUT'})
        .then(res => {
            if (res.status.toString() === '200') {
                console.log("OK. status: " + res.status);
            } else {
                console.log("FAILURE. status: " + res.status);
            }
            return res.json();
        })
        .then(body => {
            console.log(body["msg"]);
            return body;
        });
}

function divide() {
    return fetch("http://localhost:3000/calc/divide/4", {method: 'PUT'})
        .then(res => {
            if (res.status.toString() === '200') {
                console.log("OK. status: " + res.status);
            } else {
                console.log("FAILURE. status: " + res.status);
            }
            return res.json();
        })
        .then(body => {
            console.log(body["msg"]);
            return body;
        });
}

function getMBack() {
    return fetch("http://localhost:3000/calc/M", {method: 'GET'})
        .then(res => {
            if (res.status.toString() === '200') {
                console.log("OK. status: " + res.status);
            } else {
                console.log("FAILURE. status: " + res.status);
            }
            return res.json();
        })
        .then(body => {
            console.log(body["msg"]);
            return body;
        });
}

function reset() {
    return fetch("http://localhost:3000/calc/reset", {method: 'POST'})
        .then(res => {
            if (res.status.toString() === '200') {
                console.log("OK. status: " + res.status);
            } else {
                console.log("FAILURE. status: " + res.status);
            }
            return res.json();
        })
        .then(body => {
            console.log(body["msg"]);
            return body;
        });
}

async function run() {
    let server = app.listen(3000, () => {
        console.log(" The Server is here http://localhost:3000\n")
    })
    await start();
    console.log("0 + 10 = 10 , should print = 10 ")
    await add();
    console.log("10 - 6 = 4 , should print = 4 ")
    await sub();
    console.log("10 + 4 = 10 , should print = 14 ")
    await add();
    console.log("14 * 2= 28 , should print = 28 ")
    await multiply();
    console.log("28 / 4 = 7 , should print = 7 ")
    await divide();
    console.log("M = 7 , should print = 7 ")
    await getMBack();
    console.log("M = 0 , should print = 0 ")
    await reset();
    server.close()
}

run();