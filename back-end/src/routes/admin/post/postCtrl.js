const status = require('http-status');
const Post = require('schemas/post');
const User = require('schemas/user');
const Category = require('schemas/category');

// 포스팅 전체 리스트 조회
// 최신순으로 해보기
exports.list = async (req, res) => {
  try {
    // 일단 정렬은 id 역순으로 해두기.
    const list = await Post.find()
      .sort({ id: -1 })
      .populate('writer')
      .populate('category');
    if (list.length === 0) {
      res.sendStatus(status.NO_CONTENT);
      return;
    }
    res.json(list);
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

// 포스팅 작성하기
exports.write = async (req, res) => {
  try {
    // populate를 하려면 objectid로 넣어야 하는듯
    // writer랑 category의 obejctid를 구한 뒤 insert
    let { writer, category, title, content, public, tags } = req.body;

    // trim은 프론트에서 해서 와야겠다.
    tags = tags && tags.split(',');
    writer = await User.findOne({ id: writer }).select({ _id: 1 });
    category = await Category.findOne({ id: category }).select({
      _id: -1,
    });

    // 마지막 id 가져오기
    const lastPost = await Post.findOne()
      .select({ _id: 0, id: 1 })
      .sort({ id: -1 });
    const newPost = new Post({
      id: Number(lastPost.id) + 1,
      title,
      content,
      writer,
      category,
      public,
      tags,
    });
    await newPost.save();

    res.sendStatus(status.OK);
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

//포스팅 상세페이지
exports.detail = async (req, res) => {
  try {
    const { postId } = req.params;
    const detail = await Post.findOne({ _id: postId }).populate(
      'writer',
      'id name'
    );

    res.json(detail);
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

// 포스팅 내용 수정
exports.modify = async (req, res) => {
  try {
    const { postId } = req.params;
    const { title, content, public, tags } = req.body;

    const tagArr = tags && tags.split(',');

    await Post.findByIdAndUpdate(postId, {
      $set: { title, content, public, tags: tagArr },
    });
    res.sendStatus(status.OK);
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};
// 포스팅 삭제
exports.remove = async (req, res) => {
  try {
    const { postId } = req.params;
    await Post.remove({ _id: postId });
    res.sendStatus(status.OK);
  } catch (err) {
    console.log(err);
    res.sendStatus(statys.BAD_REQUEST);
  }
};
exports.moveCategory = () => {};
