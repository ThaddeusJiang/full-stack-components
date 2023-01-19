var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/room', function (req, res, next) {
  res.render('room', { title: 'Room', room: { name: 'test', user: 'jiang' } });
});

router.post('/room', function (req, res, next) {
  res.render('room', {
    title: 'Room',
    room: {
      name: req.body.name,
      user: req.body.user,
    },
  });
});

module.exports = router;
