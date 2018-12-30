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
        ? res.sendStatus(status.OK).json({ isLoggedIn: true })
        : res.sendStatus(status.UNAUTHORIZED);
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(status.INTERNAL_SERVER_ERROR);
  }
};

exports.logout = () => {};
exports.getAbout = (req, res) => {
  console.log('get about page');
};
exports.modifyAbout = (req, res) => {
  console.log('modify about page');
};
