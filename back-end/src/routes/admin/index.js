const express = require('express');
const adminCtrl = require('./adminCtrl');
const categoryRouter = require('./category');

const router = express.Router();

router.use('/category', categoryRouter);

router.post('/login', adminCtrl.login);
router.post('/logout', adminCtrl.logout);
router.get('/about', adminCtrl.getAbout);
router.put('/about', adminCtrl.modifyAbout);

module.exports = router;
