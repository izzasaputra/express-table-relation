const {sequelize}= require('../config/db')
const{DataTypes}= require('sequelize');

const Comment = sequelize.define('comment',{
    name:{
        type: DataTypes.STRING,

    },
    text:{
        type: DataTypes.STRING,
    },
    articleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'articles', // Sesuaikan ini berdasarkan nama tabel sebenarnya untuk artikel
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
})

module.exports = Comment