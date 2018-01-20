import axios from "axios";

export default {
  // Gets all Articles from database
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  // Gets all Reps from database
  getReps: function() {
    return axios.get("/api/reps");
  },
  // Gets the rep with the given id
  getRep: function(id) {
    return axios.get("/api/reps/" + id);
  },
  // Deletes the rep with the given id
  deleteRep: function(id) {
    return axios.delete("/api/reps/" + id);
  },
  // Saves a rep to the database
  saveRep: function(repData) {
    return axios.post("/api/reps", repData);
  },
  // Gets all Users from database
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the User with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a User to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};