var express = require('express')
var router = express.Router();
const dbCon = require('../db');

const { ObjectId } = require('mongodb');


// 당근 검색 -> 농장id로 검색
router.post('/findPw', (req, res) => {

  // console.log("리퀘 바디 : " + req.body.farmId);
  dbCon.db.collection('login')
  .find({ 
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
    company: req.body.company,
    department: req.body.department,
    rank: req.body.rank
  
  }).toArray((err, result) => {
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