var mongoose = require('mongoose');

var JobSchema = mongoose.Schema({
    title: String,
    description: String,
    skills: String,
    company: String,
    location: String,
    email: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Job', JobSchema);