// controllers/userController.js
const users = require('../data/users');

// GET /api/users
exports.listUsers = (req, res, next) => {
  res.json(users.getAll());
};

// GET /api/users/:id
exports.getUserById = (req, res, next) => {
  const id = Number(req.params.id);
  const user = users.getById(id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
};

// POST /api/users
exports.createUser = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const newUser = users.create({ name });
  res.status(201).json(newUser);
};