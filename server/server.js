const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const apiRouter = require('./routes/api');

// const userController = require('./controllers/userController');
// const cookieController = require('./controllers/cookieController');
// const sessionController = require('./controllers/sessionController');

const PORT = 3000;

const app = express();

// const mongoURI =
//   process.env.NODE_ENV === 'test'
//     ? 'mongodb://localhost/unit11test'
//     : 'mongodb://localhost/unit11dev';
// mongoose.connect(mongoURI);

/**
 * Automatically parse urlencoded body content and form data from incoming requests and place it
 * in req.body
 */
app.use(express.json());
app.use(express.urlencoded());

app.use('/client', express.static(path.resolve(__dirname, '../client')));

/**
 * --- Express Routes ---
 * Express will attempt to match these routes in the order they are declared here.
 * If a route handler / middleware handles a request and sends a response without
 * calling `next()`, then none of the route handlers after that route will run!
 * This can be very useful for adding authorization to certain routes...
 */

/**
 * root
 */
app.get('/', (req, res) => {
  //console.log('working');
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});
app.use('/api', apiRouter);
/**
 * signup
 */
app.get('/signup', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/signup.html'));
});

// app.post('/signup', userController.createUser , (req, res) => {
//   // what should happen here on successful sign up?

// });

/**
 * login
 */
// app.post('/login', userController.verifyUser, (req, res) => {
//   // what should happen here on successful log in?

// });

// /**
// * Authorized routes
// */
// app.get('/secret', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/secret.html'));
// });

// app.get('/secret/users', userController.getAllUsers, (req, res) => {
//   res.send( { users: res.locals.users });
// })

/**
 * 404 handler
 */
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
