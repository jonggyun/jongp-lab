const express = require('express');
const postCtrl = require('./postCtrl');

const router = express.Router();

router.get('/', postCtrl.getAllPost);
router.get('/:type(old)/:lastPostId', postCtrl.oldPosts);
router.get('/:postId', postCtrl.getDetail);
router.get('/:postId/comment', postCtrl.getComment);
router.post('/:postId/comment', postCtrl.addComment);
router.put('/:postId/comment/:commentId', postCtrl.modifyComment);
router.delete('/:postId/comment/:commentId', postCtrl.removeComment);

module.exports = router;
