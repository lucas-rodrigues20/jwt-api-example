const router = require('express').Router();
const controller = require('../controllers/users');

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);

router.post('/authenticate', controller.authenticate);

module.exports = router;
