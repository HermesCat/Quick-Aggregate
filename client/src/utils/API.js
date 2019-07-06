import axios from "axios";

const RECIPEURL =
  "https://www.food2fork.com/api/search?key=5d07a311a0f80b9d21312e7aad766dba&q=";

export default {
  searchRecipes: function(query) {
    return axios.get(RECIPEURL + query);
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
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
