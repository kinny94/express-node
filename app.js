const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app =  express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
    console.log("In another middleware");
});

app.listen(3000);
