const db = require('../models');

module.exports = {
	create: function(req, res) {
                db.Search
                .create(req.body)
                .then((dbModel) => res.json(dbModel))
                .catch((err) => res.status(422).json(err));
	},

	findAll: function(req, res) {
                db.Search
                .find(req.query)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
        },

        findById: function(req, res) {
                db.Search
                .findById(req.params.id)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
        }
};
