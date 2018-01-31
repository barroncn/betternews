import axios from "axios";
import Auth from "../modules/Auth.js";
const authHeader = () => ({ "Authorization": `bearer ${Auth.getToken()}` });

export default {

  //ARTICLES=====================================================================================================================
  // Gets all Articles from database
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  //goes to the NewsAPI to get articles
  getNewArticles: function() {
    return axios.get("https://newsapi.org/v2/top-headlines?sources=politico&apiKey=98ae3adfcc9e4d6ea7d5c679a6452712");
  },

  //REPS=====================================================================================================================
  // Gets all Reps from database
  getReps: function() {
    return axios.get("/api/reps");
  },
  //Gets reps from a certain chamber
  getChamberReps: function(chamber) {
    return axios.get("/api/reps/chamber/" + chamber);
  },
  // Gets the rep with the given id
  getRep: function(id) {
    return axios.get("/api/reps/details/" + id);
  },
  // Deletes the rep with the given id
  deleteRep: function(id) {
    return axios.delete("/api/reps/" + id);
  },
  // Saves a rep to the database
  saveRep: function(repData) {
    return axios.post("/api/reps", repData);
  },
  //goes to the Publica website to get all the senate reps
  getNewSenReps: function() {
    var config = {
      headers: { 'X-API-Key': 'pXokVRTYxVYCKFt7QY6smIfur1w1bT6TNJMybPan' }
    };

    return axios.get("https://api.propublica.org/congress/v1/115/senate/members.json", config);
  },
  //goes to the Publica website to get all the house reps
  getNewHouseReps: function() {
    var config = {
      headers: { 'X-API-Key': 'pXokVRTYxVYCKFt7QY6smIfur1w1bT6TNJMybPan' }
    };

    return axios.get("https://api.propublica.org/congress/v1/115/house/members.json", config);
  },
  //goes to the publica website to get a reps voting record
  getRepRecord: function(id) {
    var config = {
      headers: { 'X-API-Key': 'pXokVRTYxVYCKFt7QY6smIfur1w1bT6TNJMybPan' }
    };

    return axios.get("https://api.propublica.org/congress/v1/members/" + id + "/votes.json", config);
  },
  // Gets all Reps by State from database
  getStateReps: function(reptype, state) {
    return axios.get("/api/reps/" + reptype + "/" + state);
  },

  //USERS=====================================================================================================================
  // Gets all Users from database
  getUsers: function() {
    return axios({
      method: "get",
      url: "/user/profile",
      headers: authHeader()
    });
  },
  // Gets the User with the given id
  getUser: function(id) {
    console.log("ID IN GETUSER (API):");
    console.log(id);
    return axios({
      method: "get",
      url: "/user/profile/id/" + id,
      headers: authHeader()
    });
  },
  // Deletes the User with the given id
  deleteUser: function(id) {
    return axios({
      method: "delete",
      url: "/user/profile/id/" + id,
      headers: authHeader()
    });
  },
  // Saves a User to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  }
};
