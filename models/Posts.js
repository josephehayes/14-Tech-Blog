const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model{};

Posts.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    title: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
        validate: {
            len: [1, 32],
        }
    },
    contents: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
        validate: {
            len: [1, 256],
        }
    },
},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts',
});

module.exports = Posts;