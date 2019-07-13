import axios from "axios";

const RECIPEURL =
  "https://www.food2fork.com/api/search?key=5d07a311a0f80b9d21312e7aad766dba&q=";

const newsURL = "https://newsapi.org/v2/everything?q=";
const newsAPI = "&apiKey=f14386004b984aab9c45f6dcf17b377f";

export default {
  searchRecipes: function(query) {
    return axios.get(RECIPEURL + query);
  },
  saveUser: function(userData) {
    console.log(userData)
    return axios.post("/api/users", userData)
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveSearch: function(searchData) {
    console.log(searchData)
    return axios.post("/api/search", searchData);
  },
  searchNews: function(query) {
    return axios.get(newsURL + query + newsAPI);
  },
  //
};
