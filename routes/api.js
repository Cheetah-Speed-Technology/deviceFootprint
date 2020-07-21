var express = require('express');
var router = express.Router();

var deviceController = require('../controllers/deviceController');

router.route('/device_footprint')
  .get(deviceController.getencripted)
  .post(deviceController.create_encription)

module.exports = router;
