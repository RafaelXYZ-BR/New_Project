const express = require('express');
const projectcontroller = require ('../controllers/projectcontroller.js');
const router = express.Router();

router.post('/Game_Record_Library', projectcontroller.Insert);

module.exports = router;