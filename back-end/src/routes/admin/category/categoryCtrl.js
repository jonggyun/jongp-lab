const Category = require('schemas/category');
const Post = require('schemas/post');
const status = require('http-status');

const { checkAuth } = require('middlewares/auth');

// 카테고리 리스트 가져오기.
exports.getCategories = async (req, res) => {
  try {
    // 로그인 검증 하기
    const { success } = await checkAuth(req);
    if (!success) {
      res.sendStatus(status.UNAUTHORIZED);
      return res.redirect('/admin');
    }
    const categories = await Category.find().sort({ order: 1 });
    // 없을 경우 no content
    console.log(categories.length);
    if (!categories || categories.length === 0) {
      res.sendStatus(status.NO_CONTENT);
      return;
    }
    res.send(categories);
  } catch (err) {
    console.log('getCategories', err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

// 카테고리 상세
exports.getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({ _id: id }).exec();
    console.log('category', category);
    res.send(category);
  } catch (err) {
    console.log('getCategory', err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

// 카테고리 생성하기
/**
 * insert id, name, public
 */
exports.createCategory = async (req, res) => {
  try {
    // 로그인 검증 하기
    const { success } = await checkAuth(req);
    if (!success) {
      res.sendStatus(status.UNAUTHORIZED);
      return res.redirect('/admin');
    }
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
    console.log(newCategory);
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
    // 로그인 검증 하기
    const { success } = await checkAuth(req);
    if (!success) {
      res.sendStatus(status.UNAUTHORIZED);
      return res.redirect('/admin');
    }
    // $set을 하지 않으면 부분 변경이 아닌 전체가 req.body로 바뀐다. 주의!!
    await Category.findByIdAndUpdate(req.body._id, { $set: req.body });
    res.sendStatus(status.ACCEPTED);
  } catch (err) {
    console.log('modifyCategory', err);
    res.sendStatus(status.NO_CONTENT);
  }
};

// 카테고리 삭제
exports.removeCategory = async (req, res) => {
  try {
    // 로그인 검증 하기
    const { success } = await checkAuth(req);
    if (!success) {
      res.sendStatus(status.UNAUTHORIZED);
      return res.redirect('/admin');
    }
    await Category.remove({ _id: req.body.id });
    res.sendStatus(status.OK);
  } catch (err) {
    console.log(err);
  }
};

// 카테고리별 포스팅리스트
/**
 * populate 내부의 조건과 맞는 내용을 뽑으려면 filter함수를 사용해서 처리해야하는 듯.
 * 더 좋은 내용을 찾게 되면 수정하자.
 */
exports.getPostByCategory = async (req, res) => {
  try {
    // 로그인 검증 하기
    const { success } = await checkAuth(req);
    if (!success) {
      res.sendStatus(status.UNAUTHORIZED);
      return res.redirect('/admin');
    }
    const { categoryId } = req.params;
    await Post.find()
      .sort({ id: -1 })
      .populate('category')
      .exec((err, posts) => {
        const postList = posts.filter(post => {
          if (post.category.id === categoryId) {
            return post;
          }
        });
        res.json(postList);
      });
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};
