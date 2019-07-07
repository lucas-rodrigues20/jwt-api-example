const userModel = require('../models/user');

exports.getAll = (req, res) => {

  logUser(req);

  userModel
    .findAll()
    .then(users => res.json(users));

}

exports.getOne = (req, res, next) => {

  logUser(req);

  const id = parseInt(req.params.id);

  if (Number.isNaN(id))
    res.status(404).json({ message: "User not found. "});

  userModel
    .findOneById(id)
    .then(user => res.json(user))
    .catch(err => next(err));

}

exports.authenticate = (req, res, next) => {

  const { username, password } = req.body;

  userModel
    .authenticate(username, password)
    .then(result => res.json(result))
    .catch(err => next(err));

}

const logUser = function(request) {
  console.log(`Request Made by User: ${request.user.user_id}`);
}
