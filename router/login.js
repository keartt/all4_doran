const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const dbCon = require('../db');

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: true,
      passReqToCallback: false,
    },
    function (email, password, done) {
      dbCon.db.collection("login").findOne({ email: email }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "존재하지 않는 이메일" });
        }
        if (password != user.password) {
          return done(null, false, { message: "비밀번호가 틀렸습니다." });
        }
        return done(null, user);
      });
    }
  )
);


passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  dbCon.db.collection("login").findOne({ email: email }, function (err, user) {
    done(err, user);
  });
});

router.use(passport.initialize());
router.use(passport.session());

router.post("/", (req, res, next) => {
  
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send('fail');
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      // console.log('w4')
      req.session.user = user; // 사용자 정보를 세션에 저장
      // res.cookie('user', user, { maxAge: 900000, httpOnly: true });

      return res.status(200).send("로그인 성공");
    });
  })(req, res, next);
});

module.exports = router;