import axios from "axios";

const RECIPEURL =
  "https://www.food2fork.com/api/search?key=5d07a311a0f80b9d21312e7aad766dba&q=";

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
    
    return axios.post("/api/users", userData)
  },
  // Saves a book to the database
  saveSearch: function(searchData) {
    
    return axios.post("/api/search", searchData);
  },
  logIn: function(userData) {
    
    return axios.post("/api/users/login", userData)
  },
  //searching newsAPI
  searchNews: function(query) {
    return axios.get(newsURL + query + newsAPI);
  },
  //getting saved searchs
  getSearch: function(savedSearch) {
    return axios.get("/api/search", savedSearch)
  },
  deleteSearch: function(query) {
    return axios.get("/api/search", query)
  }
};
