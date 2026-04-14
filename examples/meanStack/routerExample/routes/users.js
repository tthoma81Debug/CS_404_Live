// routes/users.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// router-level middleware (example)
router.use((req, res, next) => {
  console.log('Users router hit:', req.method, req.originalUrl);
  next();
});

// GET /api/users
router.get('/', userController.listUsers);

// GET /api/users/:id
router.get('/:id', userController.getUserById);

// POST /api/users
router.post('/', userController.createUser);

module.exports = router;