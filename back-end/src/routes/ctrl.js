const status = require('http-status');
const Post = require('schemas/post');

exports.getAbout = () => {};

// 사용자 카테고리별 포스팅 목록
exports.getPostByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    await Post.find()
      .sort({ id: -1 })
      .populate('category')
      .exec((err, posts) => {
        const postList = posts.filter(post => {
          if (post.category.id === categoryId) return post;
        });

        res.json(postList);
      });
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

// 사용자 태그별 포스팅 목록
exports.getPostByTag = async (req, res) => {
  try {
    const { tag } = req.params;

    const list = await Post.find({ tags: tag })
      .sort({ id: -1 })
      .populate('category', 'id name')
      .populate('writer', 'id name');

    res.json(list);
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};
exports.getPostByKeyword = () => {};
