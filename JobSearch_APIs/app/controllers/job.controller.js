var Job = require('../models/job.model.js');

exports.create = function(req, res) {
    // Create and Save a new Job
    var job = new Job({title: req.body.title || "Untitled Job", description: req.body.description, skills: req.body.skills, company: req.body.company, location: req.body.location, email: req.body.email});
    job.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Job."});
        } else {
            res.send(data);
        }
    });

};

exports.findAll = function(req, res) {
    // Retrieve and return all Jobs from the database.
    Job.find(function(err, jobs){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving jobs."});
        } else {
            res.send(jobs);
        }
    });

};

exports.findOne = function(req, res) {
    // Find a single job with a id
    Job.findById({_id: req.params.id}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve job with id " + req.params.id});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a job identified by the id in the request
    Job.findById({_id: req.params.id}, function(err, job) {
        if(err) {
            res.status(500).send({message: "Could not find a job with id " + req.params.id});
        }
        job.title = req.body.title;
        job.description = req.body.description;
        job.skills = req.body.skills;
        job.company = req.body.company;
        job.location = req.body.location;
        job.email = req.body.email;

        job.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update job with id " + req.params.id});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a job with the specified id in the request
    Job.remove({_id: req.params.id}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete job with id " + req.params.id});
        } else {
            res.send({message: "Job deleted successfully!"})
        }
    });
};