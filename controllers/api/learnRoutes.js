const router = require('express').Router();
const { Learn } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newLearn = await Learn.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newLearn);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const learnData = await Learn.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!learnData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(learnData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
