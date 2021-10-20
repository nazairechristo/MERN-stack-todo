const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const noteSchema = new Schema({
    text: {
        type: String,
        required: true
    }
    ,
    timestamp: {
        type: String,
        default: Date.now()
    }
});


const Note = mongoose.model('Note', noteSchema, 'Notes');

module.exports = Note;