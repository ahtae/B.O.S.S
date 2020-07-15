const crypto = require('crypto');
const db = require('../db');
const { Sequelize } = db;

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('password');
    }
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('salt');
    }
  },
  googleId: {
    type: Sequelize.STRING
  },
  isBusinessOwner: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  },
  profile: Sequelize.TEXT,
  facebookUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  instagramUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  twitterUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
});

module.exports = User;

User.prototype.correctPassword = function (candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password();
};

User.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64');
};

User.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex');
};

const setSaltAndPassword = (user) => {
  if (user.changed('password')) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password(), user.salt());
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);
User.beforeBulkCreate((users) => {
  users.forEach(setSaltAndPassword);
});