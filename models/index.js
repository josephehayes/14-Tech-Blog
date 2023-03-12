const User = require('./User');
const Posts = require('./Posts');
const UserToPosts = require('./UserToPosts');

Posts.belongsToMany(User, {
    through: {
        model: UserToPosts,
        unique: false
    }
});

User.belongsToMany(Posts, {
    through: {
        model: UserToPosts,
        unique: false,
    }
});

module.exports = { User, Posts, UserToPosts };