const db = require("../models");
const bcrypt = require("bcryptjs");

// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    var hash = bcrypt.hashSync(req.body.password, 8);
    const newUser = { ...req.body, password: hash };

    db.User.create(newUser)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  login: function(req, res) {
    var hash = bcrypt.hashSync(req.body.password, 8);
    if (req.body.email && req.body.password) {
      db.User.findOne({ email: req.body.email }, (err, email) => {
        if (!email)
          res.json({
            message: "login failed, user not found",
            isLoggedIn: false
          });
      })
        .then(
          bcrypt.compare(req.body.password, hash, (err, r) => {
            res.json({ isLoggedIn: true });
          })
        )
        .catch(err => res.status(422).json(err));
    }
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
