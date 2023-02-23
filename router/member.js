var express = require('express')
var router = express.Router();
const dbCon = require('../db');

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


/** 회원가입 */
router.post('/add', (req, res) => {
  var ObjectId = require('mongodb').ObjectID;  

  const reqData = req.body;
  const dataAdd = {
    ...reqData,
    _id: new ObjectId()
  };
  
  dbCon.db.collection('login').insertOne(dataAdd, (error, result) => {
    if (error) return console.log(error);
   
    console.log('저장완료');
  });

  return res.redirect("/login")
});




module.exports = router;