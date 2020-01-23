var express = require('express');
var router = express.Router();
const { insertguess } = require('./modal/sql');

router.post('/', function (req, res, next) {

    insertguess(req.body).then((results) => {
        res.send(results)
    });
});

module.exports = router;
