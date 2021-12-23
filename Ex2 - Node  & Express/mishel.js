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
            return res;
        })
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

}

async function run() {
    let server = app.listen(3000, () => {
        console.log(" The Server is here http://localhost:3000\n")
    })
    await start();
    console.log("0 + 10 = 10 , should print = 10 ")
    await add();
    server.close()
}

run();