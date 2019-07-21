import axios from "axios";

const RECIPEURL =
  "https://www.food2fork.com/api/search?key=" +
  process.env.REACT_APP_RECIPE_API_KEY +
  "&q=";

const newsURL = "https://newsapi.org/v2/everything?q=";
const newsAPI = "&apiKey=" + process.env.REACT_APP_NEWS_API_KEY;

export default {
  //searching recipe API
  searchRecipes: function(query) {
    return axios.get(RECIPEURL + query);
  },
  searchTwitter: function(query) {
    return axios.get("/api/search/tweets?search=" + query);
  },
  //saving users to mongo
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Saves a book to the database
  saveSearch: function(searchData) {
    return axios.post("/api/search", searchData);
  },
  logIn: function(userData) {
    return axios.post("/api/users/login", userData);
  },
  //searching newsAPI
  searchNews: function(query) {
    return axios.get(newsURL + query + newsAPI);
  },
  //getting saved searchs
  getSearch: function(savedSearch) {
    return axios.get("/api/search", savedSearch);
  },
  deleteSearch: function(id) {
    return axios.delete("/api/search/" + id);
  }
};
