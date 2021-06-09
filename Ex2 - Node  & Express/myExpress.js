const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/calc.html', function (_, response) {
    response.sendFile(path.join(__dirname + '/calc.html'));
});
app.get('/readme.html', function (_, response) {
    response.sendFile(path.join(__dirname + '/public/readme.html'));
});
pp.get('/test.html', function (_, response) {
    response.sendFile(path.join(__dirname + '/public/test.html'));
});

app.listen(port, () => console.log(`Server started on port : ${port}`));

