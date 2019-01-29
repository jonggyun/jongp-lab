/**
 * token 검증하는 미들웨어
 */
const jwt = require('jsonwebtoken');
const jwtDecode = require('jwt-decode');

exports.checkAuth = req => {
  const {
    headers: { authorization },
  } = req;
  // token이 없는 경우
  if (!authorization) {
    return { success: false, message: 'not logged in' };
  }

  return jwt.verify(authorization, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return { success: false, message: 'token is not vaild' };
    }
    return { success: true, message: 'token is valid' };
  });
};

exports.getUserInfo = req => {
  const {
    headers: { authorization },
  } = req;
  return jwtDecode(authorization);
};
