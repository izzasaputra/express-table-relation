const {sequelize}= require('../config/db')
const{DataTypes}= require('sequelize');

const Article = sequelize.define('article',{
    title:{
        type: DataTypes.STRING,
    },
    description:{
        type: DataTypes.STRING,
    },
})

module.exports = Article