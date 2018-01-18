module.exports = function(app) {
    
        var jobs = require('../controllers/job.controller.js');
    
        // Add a new job
        app.post('/jobs', jobs.create);
    
        // Retrieve all jobs
        app.get('/jobs', jobs.findAll);
    
        // Retrieve a single job with id
        app.get('/jobs/:id', jobs.findOne);
    
        // Update a job with id
        app.put('/jobs/:id', jobs.update);
    
        // Delete a job with id
        app.delete('/jobs/:id', jobs.delete);
    }