const express = require('express');
const projectcontroller = require ('../controllers/projectcontroller.js');
const router = express.Router();

router.post('/Game_Record_Library', projectcontroller.Insert);
router.get('/Game_Record_Library', projectcontroller.SelectAll);
router.get('/Game_Record_Library/:id', projectcontroller.SelectDetail);

module.exports = router;