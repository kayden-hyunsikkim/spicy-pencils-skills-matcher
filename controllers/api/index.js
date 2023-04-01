const router = require('express').Router();
const userRoutes = require('./userRoutes');
const teachRoutes = require('./teachRoutes');
const learnRoutes = require('./learnRoutes');

router.use('/users', userRoutes);
router.use('/teach', teachRoutes);
router.use('/learn', learnRoutes);

module.exports = router;
