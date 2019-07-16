import axios from "axios";
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '0iXGnzjpM2w8kT5e7Ckt6bM0G',
  consumer_secret: '4tO9asPKKZqNwL9sJMmLUwbZJJItpjfxF9j31uolMzbc78p6df',
  access_token_key: '37555187-rGGvPD2SWXMr1f3vwYvbvNqs2Mt25tnaKsHSnKgGF',
  access_token_secret: 'uNkNEsgcSfFc5ODOmaLe6IUsanJhqb4Gn8ivZfuhqpREZ'
});
 
var params = {q: '#area51', tweet_mode: "extended"};
client.get('search/tweets.json', params, function(error, tweets, response) {
  if (!error) {
    tweets.statuses.forEach(tweet => console.log(tweet.full_text))
  }
});

const RECIPEURL =
  "https://www.food2fork.com/api/search?key=5d07a311a0f80b9d21312e7aad766dba&q=";

const newsURL = "https://newsapi.org/v2/everything?q=";
const newsAPI = "&apiKey=f14386004b984aab9c45f6dcf17b377f";

export default {
  //searching recipe API
  searchRecipes: function(query) {
    return axios.get(RECIPEURL + query);
  },
  searchTwitter: function(query) {
    return axios.get(query)
  },
  //saving users to mongo
  saveUser: function(userData) {
    console.log(userData)
    return axios.post("/api/users", userData)
  },
  // Saves a book to the database
  saveSearch: function(searchData) {
    console.log(searchData)
    return axios.post("/api/search", searchData);
  },
  //searching newsAPI
  searchNews: function(query) {
    return axios.get(newsURL + query + newsAPI);
  },
  //getting saved searchs
  getSearch: function(savedSearch) {
    return axios.get("/api/search", savedSearch)
  }
};
