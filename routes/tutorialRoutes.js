const express = require('express');
const router = express.Router();
const tutorialController = require('../controllers/tutorialController');



router.get('/',tutorialController.getList);
router.post('/',tutorialController.createTutorial);
router.put('/',tutorialController.updateTutorial);
router.delete('/',tutorialController.deleteTutorial);



module.exports = router;