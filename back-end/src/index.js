const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const indexRouter = require('./routes/index');
const connect = require('./schemas'); // 스키마 연결

const app = express();
connect(); // 몽고디비 연결.

app.set('port', process.env.PORT || 8001);
app.set({ 'content-type': 'application/json; charset=utf-8' });
app.use(morgan('dev'));
/** body-parser 역할 시작 */
app.use(express.json());
// extended: false -> querystring 모듈 사용, true -> qs 모듈 사용
app.use(express.urlencoded({ extended: false }));
/** body-parser 역할 끝 */

/** cookie-parser 쿠키 해석 */
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use('/', indexRouter);
/**
 * 404처리 미들웨어
 * 라우터에서 요청이 처리 되지 않으면 이쪽으로 넘어옴.
 * */
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * 에러 핸들러
 * 위에서 next()로 인해 아래 핸들러로 들어옴
 * */
app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
