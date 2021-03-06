var express = require('express');
var router = express.Router();
const { insertRound } = require('./modal/sql');

router.post('/', function (req, res, next) {

  insertRound(req.body).then((results) => {
    res.send(results.insertId)
  });
});

module.exports = router;
