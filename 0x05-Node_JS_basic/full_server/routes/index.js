// full_server/routes/index.js

const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

// Route / handled by AppController
router.get('/', AppController.getHomepage);

// Route /students handled by StudentsController.getAllStudents
router.get('/students', StudentsController.getAllStudents);

// Route /students/:major handled by StudentsController.getByMajor
router.get('/students/:major', StudentsController.getByMajor);

module.exports = router;
