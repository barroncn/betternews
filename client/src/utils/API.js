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
//   //goes to the NewsAPI to get articles
//   getNewArticles: function() {
//       return axios.get("WEBSITENAME");
//   },
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
//   //goes to the Publica website to get all the reps
//   getNewReps: function() {
//       return axios.get("WEBSITENAME");
//   },
//   //goes to the publica website to get a reps voting record
//   getRepRecord: function(id) {
//       return axios.get("WEBSITENAME");
//   },
  // Gets all Reps by State from database
  getStateReps: function(reptype, state) {
    return axios.get("/api/reps/" + reptype + "/" + state);
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