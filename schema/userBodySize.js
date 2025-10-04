const mongoose = require('mongoose');
const userBodySchema = new mongoose.Schema({
    Email:{type: String, required: true},
    Bust:{type: Number, required: true},
    Waist:{type: Number, required: true},
    Hip:{type: Number, required: true},
    HighHip:{type: Number, required: true},
    Name:{type: String, required: true},
    bodyShape:{type: String}
});


const BodySize = mongoose.model('userBodySize', userBodySchema);

module.exports = BodySize;