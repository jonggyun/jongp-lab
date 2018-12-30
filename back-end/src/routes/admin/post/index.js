const express = require('express');
const postCtrl = require('./postCtrl');

const router = express.Router();

router.get('/', postCtrl.list);
router.post('/', postCtrl.write);
router.get('/:postId', postCtrl.detail);
router.put('/:postId', postCtrl.modify);
router.delete('/:postId', postCtrl.remove);
router.put('/', postCtrl.moveCategory);

module.exports = router;
