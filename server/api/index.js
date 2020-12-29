const express = require('express');
const passport = require('passport');
const compression = require('compression');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('../db');
const cors = require('cors');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sessionStore = new SequelizeStore({ db });

app.use(express.json({ limit: '50mb' }));
app.use(
  express.urlencoded({ limit: '50mb', parameterLimit: 50000, extended: true })
);

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.use(fileUpload());
app.use(compression());

app.use(
  session({
    secret: 'my best friend is Cody',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/businesses', require('./businesses'));
app.use('/api/comments', require('./comments'));
app.use('/api/users', require('./users'));
app.use('/auth', require('../auth'));

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

async function bootApp() {
  await sessionStore.sync();
}

if (require.main === module) {
  bootApp();
}

app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
