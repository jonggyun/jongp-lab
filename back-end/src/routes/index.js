const express = require('express');
const ctrl = require('routes/ctrl');
const adminRouter = require('./admin');
const postRouter = require('./post');

const router = express.Router();

router.use('/admin', adminRouter);
router.use('/post', postRouter);

router.get('/about', ctrl.getAbout);
router.get('/category/:categoryId', ctrl.getPostByCategory);
router.get('/tag/:tag', ctrl.getPostByTag);
router.get('/keyword/:keyword', ctrl.getPostByKeyword);

module.exports = router;
