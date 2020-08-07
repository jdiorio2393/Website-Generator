const express = require('express');
const app = express();
const User = require('./Models/User');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const session = require('express-session');
const config = require('config');
const db = config.get('mongoURI');
const mongoDBStore = require('connect-mongodb-session')(session);

connectDB();

const store = new mongoDBStore({
  uri: db,
  collection: 'sessions',
});

app.use(cookieParser());
app.use(cors({ credentials: true }));

const authData = require('./routes/authRoute');

app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use((req, res, next) => {
  // const isLoggedIn = req.session;
  // console.log(isLoggedIn);
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use(authData);

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
