var device_footprint = require('../models/device_footprint');

function load(req, res, next, id) {
  device_footprint.findById(id)
      .exec()
      .then((user) => {
        req.dbUser = user;
        return next();
      }, (e) => next(e));
}
