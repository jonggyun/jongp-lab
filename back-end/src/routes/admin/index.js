const express = require('express');
const adminCtrl = require('./adminCtrl');
const categoryRouter = require('./category');
const postRouter = require('./post');

const router = express.Router();

router.use('/category', categoryRouter);
router.use('/post', postRouter);

router.post('/login', adminCtrl.login);
router.post('/logout', adminCtrl.logout);
router.get('/about', adminCtrl.getAbout);
router.put('/about', adminCtrl.modifyAbout);

module.exports = router;
