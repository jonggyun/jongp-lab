const status = require('http-status');
const bcrpyt = require('bcrypt');

const Post = require('schemas/post');
const Comment = require('schemas/comment');

const LIST_COUNT = 10;

// 사용자 전체 포스팅 조회
exports.getAllPost = async (req, res) => {
  try {
    const list = await Post.find()
      .sort({ id: -1 })
      .populate('writer', 'id name')
      .populate('category', 'id name')
      .lean()
      .limit(LIST_COUNT)
      .exec();

    if (list.length === 0) return res.sendStatus(status.NO_CONTENT);

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
    console.log('in oldPosts');
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
    console.log('result!!!!', posts, isLast);
    res.json({ posts, isLast });
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

// 사용자 포스팅 상세 페이지
exports.getDetail = async (req, res) => {
  try {
    console.log('postsssss');
    const { postId } = req.params;
    const post = await Post.findOne({ _id: postId })
      .populate('writer', 'id name')
      .populate('category', 'id name');

    res.json(post);
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

// 포스팅에 달린 댓글 불러오기
exports.getComment = async (req, res) => {
  try {
    const { postId } = req.params;

    const list = await Comment.find({ postId }).sort({ createdAt: 1 });
    res.json(list);
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

// 포스팅에 댓글 추가하기.
exports.addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { writer, content, public, password } = req.body;

    await bcrpyt.genSalt(10, (err, salt) => {
      bcrpyt.hash(password, salt, (err, hash) => {
        const comment = new Comment({
          postId,
          writer,
          content,
          password: hash,
          public,
        });
        comment.save();
        res.sendStatus(status.OK);
      });
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

// 포스팅에 댓글 수정하기
exports.modifyComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const { content, public, password } = req.body;

    //  비밀번호가 맞을 경우 변경 가능하게 하기.
    const comment = await Comment.findOne({ _id: commentId, postId: postId });

    await bcrpyt.compare(password, comment.password, (err, hash) => {
      if (err) {
        console.log('bcrypt. compare() error', err.message);
        res.sendStatus(status.INTERNAL_SERVER_ERROR);
      }
      if (!hash) {
        res.sendStatus(status.UNAUTHORIZED);
        return res.redirect('/admin');
      }
      // 찾아서 업데이트
      Comment.findByIdAndUpdate(commentId, {
        $set: { content, public },
      }).exec();
      res.sendStatus(status.OK);
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

// 포스팅에 댓글 삭제하기
exports.removeComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const { password } = req.body;

    // 비밀번호가 맞을 경우 삭제하도록.
    const comment = await Comment.findOne({ _id: commentId, postId: postId });

    await bcrpyt.compare(password, comment.password, (err, hash) => {
      if (err) {
        console.log('bcrypt. compare() error', err.message);
        res.sendStatus(status.INTERNAL_SERVER_ERROR);
      }
      if (!hash) {
        // 여기는 딱히 로그인이 아니기 떄문에 비밀번호가 맞지 않으면 수정되지 않음으로 return
        res.sendStatus(status.NOT_MODIFIED);
        return;
      }
      Comment.remove({ _id: commentId }).exec();
      res.sendStatus(status.ACCEPTED);
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};
