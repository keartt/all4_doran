var express = require('express')
var router = express.Router();
const dbCon = require('../db');

const { ObjectId } = require('mongodb');

// 당근 주기
router.post('/add', (req, res) => {
  // console.log("reqData : " + JSON.stringify(req.body))

  const user = req.session.user; // 저장된 세션의 사용자 정보 가져오기
  const userid = user._id;
  const uesrName = user.name;
  const uesrEmail = user.email;


  var ObjectId = require('mongodb').ObjectID; // 이거 필수 
  var objId = new ObjectId();
  const reqData = req.body;
  const dataAdd = {
    ...reqData,
    _id: objId,
    userEmail: uesrEmail,
    userName: uesrName,
    date: new Date()
  };

  dbCon.db.collection('carrot').insertOne(dataAdd, (error, result) => {

    // 저장 완료 후 totalPost 즉 게시글 id 번호도 1 증가시켜줘야 함
    dbCon.db.collection('farm').updateOne({ _id: ObjectId(req.body.farmId) }, { $inc: { counter: 1 } }, (err, res) => {
      if (err) return console.log(err);
    });
    // console.log('저장완료');
  });
  res.send({ carrotId: objId });
});


// 당근 검색 -> 농장id로 검색
router.post('/select', (req, res) => {


  var farm = req.body.farmId;

  // console.log("리퀘 바디 : " + req.body.farmId);
  dbCon.db.collection('carrot').find({ farmId: req.body.farmId }).sort({ _id: -1 }).toArray((err, result) => {
    res.json(result);
  });

});

// 농장 검색 -> 농장id로 접근해야함
router.post('/selectCarrot', (req, res) => {


  // console.log("리퀘 바디 : " + req.body.farmId);
  dbCon.db.collection('carrot').find({ _id: ObjectId(req.body.carrotId) }).toArray((err, result) => {
    res.json(result);
  });

});

module.exports = router;