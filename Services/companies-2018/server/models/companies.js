const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompaniesSchema = new Schema({
    rank: String,
    city: String,
    company: String,
    website: String,
    state: String,
    founded: String,
    industry: String
});

module.exports = mongoose.model('Companies', CompaniesSchema);