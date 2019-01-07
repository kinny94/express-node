const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log("In another middleware");
    res.send('hello');
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;