const sequelize = require('../config/connection');
const { User, Teach , Learn } = require('../models');

const userData = require('./userData.json');
const teachData = require('./teachData.json');
const learnData = require('./learnData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const teach of teachData) {
    await Teach.create({
      ...teach,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const learn of learnData) {
    await Learn.create({
      ...learn,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
