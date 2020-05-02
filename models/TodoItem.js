const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    name: {type: String, required: true},
    status: {type: String, enum: ['todo', 'inProgress', 'done'], default: 'todo', required: true}
}, {
    collection: 'todoList',
    minimize: false,
    versionKey: false,
})

module.exports = Schema