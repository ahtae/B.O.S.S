const db = require("../db");
const { Sequelize } = db;

const Comment = db.define("comment", {
  comment: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  stars: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
      notEmpty: true,
    },
  },
  photo: {
    type: Sequelize.STRING,
  },
});

module.exports = Comment;
