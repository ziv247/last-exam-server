var express = require('express');
var router = express.Router();
const { insertRound } = require('./modal/sql');

/* GET users listing. */
router.post('/', async function (req, res, next) {
  try {
    const response = await insertRound(req.body);
    console.log(response.json());

    res.send('respond with a resource');
  } catch (error) {

  }
  const details = req.body;
  res.send('respond with a resource');
});

module.exports = router;
