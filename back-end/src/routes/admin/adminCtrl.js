const User = require('schemas/user');
const bcrpyt = require('bcrypt');
const status = require('http-status');
const jwt = require('jsonwebtoken');

const { checkAuth } = require('middlewares/auth');

exports.login = async (req, res, next) => {
  try {
    //const body = req.body;
    const { id, password } = req.body;
    const user = await User.findOne({ id });

    console.log('find User!!!!!!!!', user);

    if (user === null) {
      res.json({ isLoggedIn: false });
      return;
    }

    bcrpyt.compare(password, user.password, (err, hash) => {
      if (err) {
        console.log('bcrypt. compare() error', err.message);
        res.sendStatus(status.INTERNAL_SERVER_ERROR);
      }
      if (!hash) {
        res.sendStatus(status.UNAUTHORIZED);
        return;
      }
      //jwt token 발급하기
      const token = jwt.sign(
        {
          id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '1d',
          issuer: 'jongplab',
        }
      );

      res.json({ isLoggedIn: true, token, id });
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(status.INTERNAL_SERVER_ERROR);
  }
};

exports.logout = () => {};

// about 조회
exports.getAbout = async (req, res) => {
  try {
    // 로그인 검증 하기
    const { success } = await checkAuth(req);
    if (!success) {
      res.sendStatus(status.UNAUTHORIZED);
      return;
    }
    const { about } = await User.findOne({ auth: 'admin' });
    res.json(about);
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};

// about 수정
exports.modifyAbout = async (req, res) => {
  try {
    // 로그인 검증 하기
    const { success } = await checkAuth(req);
    if (!success) {
      res.sendStatus(status.UNAUTHORIZED);
      return;
    }
    const { about, id } = req.body;
    const { _id } = await User.findOne({ id, auth: 'admin' });
    await User.update({ _id, auth: 'admin' }, { about: about });

    res.sendStatus(status.OK);
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};
