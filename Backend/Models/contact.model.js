//model contact with mongoose

var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    contactType: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    comments: [{
        body: String,
        date: {
            type: Date,
            default: Date.now
        }
    }],
    task: [{
        title: String,
        last_date: Date,
        date: {
            type: Date,
            default: Date.now
        }
    }],
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
});

exports.ContactModel = mongoose.model('contact', contactSchema);