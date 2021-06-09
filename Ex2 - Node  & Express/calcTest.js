const fetch = require('node-fetch');
const port = 3000;

// here we verify addition and subtraction
fetch('http://localhost:3000/start')
    .then(out => out.text())
    .then(out => {
        fetch('http://localhost:3000/calc/add/5', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
        }).then(out => out.json())
            .then(out => {
                console.log("Verifying addition: " + (out == "5"))
                fetch('http://localhost:3000/calc/sub/5', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                }).then(out => out.json())
                    .then(subbed => {
                        console.log("Verifying subtraction: " + (subbed == "0"))
                    })
            });
    })

// here we verify M
fetch('http://localhost:3000/start')
    .then(out => out.text())
    .then(uid => {
        fetch('http://localhost:3000/calc/add/1', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
        })
            .then(out => out.json())
            .then(out => {
                fetch('http://localhost:3000/calc/M')
                    .then(out => out.json())
                    .then(val => {
                        console.log("Verifying M get: " + (val == "1"))
                    })
            });
    })

// here we verify reset
fetch('http://localhost:3000/start')
    .then(out => out.text())
    .then(uid => {
        fetch('http://localhost:3000/calc/add/1', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
        })
            .then(out => out.json())
            .then(out => {
                fetch('http://localhost:3000/calc/reset', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                })
                    .then(out => out.json())
                    .then(val => {
                        console.log("Verifying reset: " + (val == "0"))
                    })
            });
    })

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
