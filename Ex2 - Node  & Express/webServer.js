const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors(), require('./myExpress'));
app.use(cors(), require('./calc'));

app.listen(3000, () => {
    console.log(" The Server is here http://localhost:3000\n")
    console.log(" Calc: http://localhost:3000/calc.html\n" + " ReadME: http://localhost:3000/readme.html\n" + " Test: http://localhost:3000/test.html");
})
