const router = require('express').Router();
const authorization = require('express-jwt-permissions')();

const controller = require('../controllers/users');

router.get('/', authorization.check([['admin'], ['collaborator']]), controller.getAll);
router.get('/:id', controller.getOne);

router.post('/authenticate', controller.authenticate);

module.exports = router;
