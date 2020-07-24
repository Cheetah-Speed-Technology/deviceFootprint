
var device_footprint = require('../models').device_footprint;

exports.getencripted = (req, res, next)=>{
  device_footprint.findAll()
    .then(response => {
      res.json({
        status: "success",
        message: "success",
        data: "success",
        model: response
      })
    });
}

// this handles the logic for posting the info to the database
exports.create_encription = (req, res, next)=>{
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
}
