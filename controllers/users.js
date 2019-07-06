const userModel = require('../models/user');

exports.getAll = (req, res) => {

  userModel
    .findAll()
    .then(users => res.json(users));

}

exports.getOne = (req, res, next) => {

  const id = parseInt(req.params.id);

  if (Number.isNaN(id))
    res.status(404).json({ message: "User not found. "});

  userModel
    .findOneById(id)
    .then(user => res.json(user))
    .catch(err => next(err));

}
