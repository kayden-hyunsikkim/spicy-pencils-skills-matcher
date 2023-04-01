const User = require('./User');
const Teach = require('./Teach');
const Learn = require('./Learn');

User.hasMany(Teach, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Teach.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Learn, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Learn.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Teach , Learn };
