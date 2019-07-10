const db = require('../models');

module.exports = {
	create: function(req, res) {
        db.Search.find(req.query)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
	}
};
