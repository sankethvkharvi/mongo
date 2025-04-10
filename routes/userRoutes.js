const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.get('/users', userController.getAllUsers);

module.exports = router;
