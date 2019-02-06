const express = require('express');
const postCtrl = require('./postCtrl');
const fs = require('fs');
const path = require('path');

const router = express.Router();
fs.readdir('uploads', error => {
  if (error) {
    fs.mkdirSync('uploads');
  }
});

const multer = require('multer');
//const upload = multer({ dest: 'uploads'});
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(
        null,
        path.basename(file.originalname, ext) + new Date().valueOf() + ext
      );
    },
  }),
});

router.get('/', postCtrl.list);
router.post('/', upload.single('thumbnail'), postCtrl.write);
router.get('/:postId', postCtrl.detail);
router.put('/:postId', upload.single('thumbnail'), postCtrl.modify);
router.get('/:postId/comment', postCtrl.getComment);
router.delete('/:postId', postCtrl.remove);
router.put('/', postCtrl.moveCategory);

module.exports = router;
