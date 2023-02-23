var express = require('express')
var router = express.Router();

router.get('/user', (req, res, next) => {
  const user = req.session.user;
  console.log("3"+user+JSON.stringify(user))
  if (!user) {
    res.status(401).send('로그인이 필요합니다.');
    console.log("3"+user.email)
    return;
  }
  console.log(user.email)
  res.status(200).send(`안녕하세요, ${user.email}님!`);
});

module.exports = router;