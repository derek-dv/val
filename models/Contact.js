const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    whatsapp: { type: String, required: true },
    message: { type: String, required: true },
    type: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Contact', ContactSchema);
