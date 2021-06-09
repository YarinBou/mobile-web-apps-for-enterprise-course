const express = require('express');
const app = express();
const port = 3000

let M = 0;

app.post('/calc/start', (req, out) => {
    M = 0;
});

app.post('/calc/add/:num', (req, out) => {
    M += parseFloat(req.params.num);
    out.send(M);

});

app.post('/calc/sub/:num', (req, out) => {
    let num = req.params.num;
    if (num == 0) {
        out.status(500).send("Error: Divide by zero")
        return
    }
    M -= parseFloat(num);
    out.send(M);

});

app.put('/calc/multiply/:num', (req, out) => {
    M = M * parseFloat(req.params.num);
    out.send(M);

});

app.put('/calc/divide/:num', (req, out) => {
    M = M / parseFloat(req.params.num);
    out.send(M);

});

app.get('/calc/M', (req, out) => {
    out.send(0);
});

app.post('/calc/reset', (req, out) => {
    M = 0
    out.send(M);
});

app.put('/calc/reset', (req, out) => {
    M = 0
    out.send(M);
});

//The 404 Route (ALWAYS Keep this as the last route) thank you : https://stackoverflow.com/a/6528951/15352670
app.get('*', function(req, res){
    res.status(404).send('unknown request');
});

app.listen(port, () => {
    console.log(`Server started on port :${port}`)
})

