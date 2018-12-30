const Category = require('schemas/category');
const status = require('http-status');

// 카테고리 리스트 가져오기.
exports.getCategory = async (req, res) => {
  try {
    const list = await Category.find().sort({ order: 1 });
    // 없을 경우 no content
    console.log(list.length);
    if (!list || list.length === 0) {
      res.sendStatus(status.NO_CONTENT);
      return;
    }
    res.send(list);
  } catch (err) {
    console.log('getCategory', err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

// 마테고리 생성하기
/**
 * insert id, name, public
 */
exports.createCategory = async (req, res) => {
  try {
    // 마지막 order 가져오기
    const lastCategory = await Category.findOne()
      .select({ _id: 0, order: 1 })
      .sort({ order: -1 });

    const newCategory = new Category({
      id: req.body.id,
      name: req.body.name,
      order: Number(lastCategory.order) + 1,
      public: req.body.public,
    });
    newCategory.save();

    res.sendStatus(status.OK);
  } catch (err) {
    console.log('createCategory', err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

// 카테고리 수정
exports.modifyCategory = async (req, res) => {
  try {
    await Category.findByIdAndUpdate(req.body._id, { $set: req.body });
    res.sendStatus(status.ACCEPTED);
  } catch (err) {
    console.log('modifyCategory', err);
    res.sendStatus(status.NO_CONTENT);
  }
};
exports.removeCategory = async (req, res) => {
  try {
    await Category.remove({ _id: req.body._id });
    res.sendStatus(status.OK);
  } catch (err) {
    console.log(err);
  }
};
exports.getCategoryByPost = () => {};
