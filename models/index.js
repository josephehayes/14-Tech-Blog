const User = require('./User');
const Posts = require('./Posts');
const UserToPosts = require('./UserToPosts');
const Comments = require('./Comments');

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

// User.belongsToMany(Comments, {
//     through: {
//         model: 
//      }   
//     });

module.exports = { User, Posts, UserToPosts, Comments };