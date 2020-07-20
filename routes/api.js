var express = require('express');
var router = express.Router();

var device_footprint = require('../models').device_footprint

router.route('/device_footprint')
  .get(function (req, res) {
    device_footprint.findAll().then(response => {
        // console.log("All users:", JSON.stringify(users, null, 4));
      res.json({
        status: "success",
        message: "success",
        data: "success",
        model: response
      })
    });
  })
  .post(function (req, res) {
    device_footprint.create({
      ip_address: 'req.body.ip_address',
      browser: 'req.body.browser',
      os: 'req.body.os',
      location: 'req.body.location',
      encription: 'req.body.encription'
    })
    .then(response => {
        res.json({
          status: "success",
          message: "success",
          data: response
        })
    });
  })

module.exports = router;
