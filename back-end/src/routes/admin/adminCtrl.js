const User = require('schemas/user');
const bcrpyt = require('bcrypt');
const status = require('http-status');

exports.login = async (req, res, next) => {
  try {
    const body = req.body;
    const user = await User.findOne({ id: body.id });

    bcrpyt.compare(body.password, user.password, (err, hash) => {
      if (err) {
        console.log('bcrypt. compare() error', err.message);
        res.sendStatus(status.INTERNAL_SERVER_ERROR);
      }
      hash === true
        ? res.json({ isLoggedIn: true })
        : res.sendStatus(status.UNAUTHORIZED);
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
    const { about, id } = req.body;
    const { _id } = await User.findOne({ id, auth: 'admin' });
    await User.update({ _id, auth: 'admin' }, { about: about });

    res.sendStatus(status.OK);
  } catch (err) {
    console.log(err);
    res.sendStatus(status.BAD_REQUEST);
  }
};
