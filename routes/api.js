var express = require('express');
var router = express.Router();

var encriptController = require('../controllers/encriptController');

router.route('/encript')
  .get(encriptController.decrypt)
  .post(encriptController.encrypt)

module.exports = router;
