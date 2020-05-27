//Bringing in Express
const express = require('express');
const jobController = express.Router();
const mongoose = require(`mongoose`);
const Job = require('../models/jobs');

//ROUTES

// Index
jobController.get('/', (req, res) => {
    Job.find({}, (error, allJobs) => {
        res.render('Index', {
            jobs: allJobs
        });
    });
});

// New
jobController.get('/new', (req, res) => {
    res.render('New');
});

// Show
jobController.get('/:id', (req, res) => {
    Job.findById(req.params.id, (error, foundJob) => {
        res.render('Show', {
            job: foundJob,
        });
    });
});

//EDIT
jobController.get('/edit/:id', (req, res) => {
    Job.findById(req.params.id, (error, foundJob) => {
        res.render('Edit', { job: foundJob });
    });
})

// Create
jobController.post('/', (req, res) => {
    if (req.body.applicationComplete === 'on') {
        req.body.applicationComplete = true;
    } else {
        req.body.applicationComplete = false;
    }
    
    Job.create(req.body, (error, createdJob) => {
        res.redirect('/jobs');
    });
});

//UPDATE
jobController.put('/edit/:id', (req, res) => {
    if (req.body.applicationComplete === 'on') {
        req.body.applicationComplete = true;
    } else {
        req.body.applicationComplete = false;
    }
    Job.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        res.redirect('/jobs');
    });
});

//DELETE ROUTE
jobController.delete('/:id', (req, res) => {
    Job.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/jobs');
    });
});

////////////

//Export
module.exports = jobController;