const express = require('express');
const categoryCtrl = require('./categoryCtrl');

const router = express.Router();
router.get('/', categoryCtrl.getCategory);
router.post('/', categoryCtrl.createCategory);
router.put('/', categoryCtrl.modifyCategory);
router.delete('/', categoryCtrl.removeCategory);
router.get('/:categoryId', categoryCtrl.getCategoryByPost);

module.exports = router;
