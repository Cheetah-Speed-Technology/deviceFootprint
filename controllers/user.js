var user = require('../models/user');

function load(req, res, next, id) {
    User.findById(id)
      .exec()
      .then((user) => {
        req.dbUser = user;
        return next();
      }, (e) => next(e));
}