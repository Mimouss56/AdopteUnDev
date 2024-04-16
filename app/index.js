const express = require('express');
const expressSession = require('express-session');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const optionsSwagger = require('./swagger/option');
require('dotenv').config();

const app = express();
const router = require('./routers/index');

// Middleware pour la gestion de sessions
app.use(
  expressSession({
    resave: true,
    saveUninitialized: true,
    secret: process.env.CLIENT_SECRET,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, // Une heure
    },
  }),
);

// Middleware pour permettre les requêtes CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Credentials, Access-Control-Request-Headers');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

  // Réponse à une requête preflight
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Middleware pour le décodage des requêtes body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middleware pour Swagger
expressJSDocSwagger(app)(optionsSwagger);
// Middleware Router
app.use(router);

module.exports = app;
