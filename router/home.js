var express = require('express')
var router = express.Router();
const dbCon = require('../db');

// const collectionName = 'farm'

router.post('/company', (req, res) => {
  const user = req.session.user;
  console.log(user)
  const company = user.company;
  console.log(company);

  // const user = req.session.user; // 저장된 세션의 사용자 정보 가져오기
  // console.log(user)
  // console.log('a : ' + req.body.company )
  dbCon.db.collection('farm').find({company : company , CorD : true}).toArray((err, result) => {
        // res.json(result);
        const output  = json(result);
        
        res.json(result);
    }); 
});

router.post('/department', (req, res) => {
  const user = req.session.user;
  console.log(user)
  const company = user.company;
  console.log(company);
  // req  =  company & CorD 
  // console.log('a : ' + req.body.company )
  dbCon.db.collection('farm').find({company : company , CorD : false}).toArray((err, result) => {
        // console.log('r:' +result)
        res.json(result);
    }); 
});

router.post('/my', (req, res) => {
  const user = req.session.user; // 저장된 세션의 사용자 정보 가져오기
  // console.log( user);
  // const  eeee = user.email;
  // console.log(eeee);
  const receiver = user.email;
  // console.log(userId); // _id 값이 출력됩니다.

  // const userId = '강성현'

  dbCon.db.collection('farm').find({receiver : receiver }).toArray((err, result) => {
    
    // console.log(result)   
    res.json(result);
        
    }); 
});

module.exports = router;