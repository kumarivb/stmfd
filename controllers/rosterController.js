//Controller 
//It listens to API file, calls the DB and returns result to front-end

const db = require("../models");

// Defining methods for the rosterController
module.exports = {
  findAll: function(req, res) {
	console.log("in findAll");
    db.Roster
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
	console.log("in findById");
    db.Roster
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
	console.log("in create");
    db.Roster
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
	console.log("in update");	  
    db.Roster
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
	console.log("in remove");	  
    db.Roster
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};