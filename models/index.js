const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post')

// comment and post belong to User
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// post hasMany comments
Post.hasMany(Comment, {
    foreignKey: 'comment_id'
});


module.exports = { User};
