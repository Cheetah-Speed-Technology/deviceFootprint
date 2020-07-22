var express = require('express');
var router = express.Router();

var deviceController = require('../controllers/deviceController');
// var device_footprint = require('../models').device_footprint;

router.route('/device_footprint')
  .get(deviceController.getencripted)
  .post(deviceController.create_encription)

module.exports = router;
