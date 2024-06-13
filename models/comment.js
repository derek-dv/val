const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    email: String,
    name: String
});

module.exports = mongoose.model('Comment', CommentSchema);
