const db = require('../db');
const Business = require('./business');
const Comment = require('./comment');
const User = require('./user');

Business.belongsTo(User, { as: 'owner' });
User.hasMany(Business, { foreignKey: 'ownerId' });

Comment.belongsTo(User);
Business.hasMany(Comment);

module.exports = {
  db,
  Business,
  Comment,
  User
};
