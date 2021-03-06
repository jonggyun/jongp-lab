const status = require('http-status');
const fs = require('fs');

const Post = require('schemas/post');
const User = require('schemas/user');
const Category = require('schemas/category');
const Comment = require('schemas/comment');

const { checkAuth, getUserInfo } = require('middlewares/auth');

const LIST_COUNT = 20;

// 포스팅 전체 리스트 조회
// 최신순으로 해보기
exports.list = async (req, res) => {
  try {
    // 로그인 검증 하기
    const { success } = await checkAuth(req);
    if (!success) {
      res.sendStatus(status.UNAUTHORIZED);
      return res.redirect('/admin');
    }
    // 일단 정렬은 id 역순으로 해두기.
    const list = await Post.find()
      .sort({ id: -1 })
      .populate('writer')
      .populate('category')
      .lean()
      .limit(LIST_COUNT)
      .exec();
    if (list.length === 0) {
      res.sendStatus(status.NO_CONTENT);
      return;
    }

    const posts = list.map(post => ({
      ...post,
      title:
        post.title.length < 13 ? post.title : `${post.title.slice(0, 13)}...`,
      subtitle:
        post.subtitle &&
        (post.subtitle.length < 50
          ? post.subtitle
          : `${post.subtitle.slice(0, 50)}...`),
    }));
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

exports.oldPosts = async (req, res) => {
  try {
    const { lastPostId } = req.params;
    const newPosts = await Post.find()
      .sort({ id: -1 })
      .lt('id', lastPostId)
      .populate('writer')
      .populate('category')
      .lean()
      .limit(LIST_COUNT)
      .exec();

    const posts = newPosts.map(post => ({
      ...post,
      title:
        post.title.length < 13 ? post.title : `${post.title.slice(0, 13)}...`,
      subtitle:
        post.subtitle &&
        (post.subtitle.length < 50
          ? post.subtitle
          : `${post.subtitle.slice(0, 50)}...`),
    }));

    const isLast = newPosts.length < LIST_COUNT ? true : false;
    console.log('isLast!!!!!', isLast);
    res.json({ posts, isLast });
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

// 포스팅 작성하기
exports.write = async (req, res) => {
  try {
    //로그인 검증 하기
    const { success } = await checkAuth(req);
    if (!success) {
      res.sendStatus(status.UNAUTHORIZED);
      return res.redirect('/admin');
    }
    // populate를 하려면 objectid로 넣어야 하는듯
    // writer랑 category의 obejctid를 구한 뒤 insert
    let {
      writer,
      category,
      title,
      content,
      isPublic,
      tags,
      subtitle,
    } = req.body;
    const userInfo = await getUserInfo(req);
    const { filename, path } = req.file;

    // trim은 프론트에서 해서 와야겠다.
    tags = tags && tags.split(',');
    writer = await User.findOne({ id: userInfo.id }).select({ _id: 1 });
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
      subtitle,
      content,
      writer,
      category,
      public: isPublic,
      tags: tags.map(tag => tag.trim()),
      thumbnail: filename,
      thumbnailPath: path,
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
    // 로그인 검증 하기
    const { success } = await checkAuth(req);
    if (!success) {
      res.sendStatus(status.UNAUTHORIZED);
      return res.redirect('/admin');
    }
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
    // 로그인 검증 하기
    const { success } = await checkAuth(req);
    if (!success) {
      res.sendStatus(status.UNAUTHORIZED);
      return res.redirect('/admin');
    }
    const { postId } = req.params;
    const { title, content, public, tags } = req.body;
    const { filename, path } = req.file;
    const tagArr = tags && tags.split(',');

    const preData = await Post.findOne({ _id: postId }).select({
      thumbnailPath: 1,
    });
    console.log('preData', preData);
    fs.unlink(preData.thumbnailPath, err => {
      if (err) throw err;
      console.log('successfully remove file.');
    });

    await Post.findByIdAndUpdate(postId, {
      $set: {
        title,
        content,
        public,
        tags: tagArr,
        thumbnail: filename,
        thumbnailPath: path,
      },
    });
    res.sendStatus(status.OK);
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

// 포스팅에 달린 댓글 불러오기
exports.getComment = async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await Comment.find({ postId }).sort({ createdAt: 1 });
    console.log(comments);
    res.json(comments);
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

// 포스팅 삭제
exports.remove = async (req, res) => {
  try {
    // 로그인 검증 하기
    const { success } = await checkAuth(req);
    if (!success) {
      res.sendStatus(status.UNAUTHORIZED);
      return res.redirect('/admin');
    }
    const { postId } = req.params;
    console.log('remove', postId);
    await Post.remove({ _id: postId });
    res.sendStatus(status.OK);
  } catch (err) {
    console.log(err);
    res.sendStatus(statys.BAD_REQUEST);
  }
};
exports.moveCategory = () => {};
