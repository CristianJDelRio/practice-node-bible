const router = require('express').Router();
const { QuotesControler } = require('../controllers');

router.get('/', QuotesControler.index);
router.get('/all', QuotesControler.get);
router.post('/add', QuotesControler.add);

module.exports = router;
