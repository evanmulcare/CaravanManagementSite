const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    assigned: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Task', taskSchema)