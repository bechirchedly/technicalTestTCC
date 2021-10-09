const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let personSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    }
}, {
    collection: 'persons'
})

module.exports = mongoose.model('Person', personSchema);