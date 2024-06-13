const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const contactRoute = require("./routes/contact");

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use("/api/contact", contactRoute);

mongoose.connect('mongodb+srv://derekmiracledavid:derekmiracledavid@cluster0.edebmy0.mongodb.net/valuemine', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
