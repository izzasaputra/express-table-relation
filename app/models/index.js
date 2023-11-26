const { sequelize, connecDb } = require("../config/db")
const Sequelize= require("sequelize")

const db={};

db.Sequelize= Sequelize;
db.sequelize= sequelize;
db.article= require("./article.model");
db.comment= require("./comment.model");

db.article.hasMany(db.comment, {as:"comments"});
db.comment.belongsTo(db.article, {
    foreignKey:"articleId",
    as:"article",
});

//db.sequelize.sync()

module.exports= db;