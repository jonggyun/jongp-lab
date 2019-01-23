const express = require('express');
const categoryCtrl = require('./categoryCtrl');

const router = express.Router();
router.get('/', categoryCtrl.getCategories);
router.get('/:id', categoryCtrl.getCategory);
router.post('/', categoryCtrl.createCategory);
router.put('/', categoryCtrl.modifyCategory);
router.delete('/', categoryCtrl.removeCategory);
router.get('/:categoryId', categoryCtrl.getPostByCategory);

module.exports = router;
