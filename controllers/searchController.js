const db = require("../models");

var Twitter = require("twitter");

var client = new Twitter({
  consumer_key: "0iXGnzjpM2w8kT5e7Ckt6bM0G",
  consumer_secret: "4tO9asPKKZqNwL9sJMmLUwbZJJItpjfxF9j31uolMzbc78p6df",
  access_token_key: "37555187-rGGvPD2SWXMr1f3vwYvbvNqs2Mt25tnaKsHSnKgGF",
  access_token_secret: "uNkNEsgcSfFc5ODOmaLe6IUsanJhqb4Gn8ivZfuhqpREZ"
});

module.exports = {
  create: function(req, res) {
    db.Search.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAll: function(req, res) {
    db.Search.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Search.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  findByIdAndRemove: function(req, res) {
    db.Search.findByIdAndRemove(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  findByHashTag: function(req, res) {
    var params = { q: req.query.search, tweet_mode: "extended" };
    client.get("search/tweets.json", params, function(error, tweets, response) {
      if (!error) {
        return res.json(tweets.statuses);
      }

      res.json(error);
    });
  }
};
