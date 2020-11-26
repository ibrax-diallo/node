const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const positiveRoutes = require('./routes/positive');
const casContactRoutes = require('./routes/casContact');
const suiviRoutes = require('./routes/suivi');
const depistageRoutes = require('./routes/depistage');
const path = require('path');


mongoose.connect('mongodb+srv://ibrax:Admin2020@cluster0-3n4vd.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/users', userRoutes);
app.use('/api/positives', positiveRoutes);
app.use('/api/cascontacts', casContactRoutes);
app.use('/api/suivi', suiviRoutes);
app.use('/api/depistage', depistageRoutes);
module.exports = app;