const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class UserToPosts extends Model{};

UserToPosts.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'posts',
            key: 'id',
        },
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_to_posts',
});

module.exports = UserToPosts;