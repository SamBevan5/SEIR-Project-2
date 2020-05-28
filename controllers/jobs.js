//Bringing in Express
const express = require('express');
const jobController = express.Router();
const mongoose = require(`mongoose`);
const Job = require('../models/jobs');

//ROUTES

// Index

jobController.get('/', (req, res) => {
    Job.find({}, (error, allJobs) => {
        res.render('Home', {
            jobs: allJobs
        });
    });
});

jobController.get('/yourjobs', (req, res) => {
    Job.find({}, (error, allJobs) => {
        res.render('Index', {
            jobs: allJobs
        });
    });
});

// New
jobController.get('/yourjobs/new', (req, res) => {
    res.render('New');
});


// Show
jobController.get('/yourjobs/:id', (req, res) => {
    Job.findById(req.params.id, (error, foundJob) => {
        res.render('Show', {
            job: foundJob,
        });
    });
});

//EDIT
jobController.get('/yourjobs/edit/:id', (req, res) => {
    Job.findById(req.params.id, (error, foundJob) => {
        res.render('Edit', { job: foundJob });
    });
})

// Create
jobController.post('/yourjobs', (req, res) => {
    if (req.body.applicationComplete === 'on') {
        req.body.applicationComplete = true;
    } else {
        req.body.applicationComplete = false;
    }
    if (req.body.isActive === 'on') {
        req.body.isActive = true;
    } else {
        req.body.isActive = false;
    }
    
    Job.create(req.body, (error, createdJob) => {
        res.redirect('/jobs/yourjobs');
    });
});



//UPDATE
jobController.put('/yourjobs/edit/:id', (req, res) => {
    if (req.body.applicationComplete === 'on') {
        req.body.applicationComplete = true;
    } else {
        req.body.applicationComplete = false;
    }
    if (req.body.isActive === 'on') {
        req.body.isActive = true;
    } else {
        req.body.isActive = false;
    }
    Job.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        res.redirect('/jobs/yourjobs');
    });
});

//DELETE ROUTE
jobController.delete('/yourjobs/:id', (req, res) => {
    Job.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/jobs/yourjobs');
    });
});

////////////

//Export
module.exports = jobController;