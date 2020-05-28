const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const jobSchema = new Schema({
    company: { type: String, required: true },
    applicationComplete: Boolean,
    isActive: Boolean,
    interviewDate: { type: String, required: true },
    interviewer: { type: String, required: true },
    notes: { type: String, required: true },
    img: String
}, { timestamps: true });

//  Create Model from our Schema
const Job = mongoose.model('Job', jobSchema);

// Export Model
module.exports = Job;