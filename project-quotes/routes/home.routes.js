const router = require('express').Router();
const { HomeControler } = require('../controllers');

router.get('/', HomeControler.index);
router.get('/about', HomeControler.about);

module.exports = router;
