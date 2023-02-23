const express = require('express');
const router = express.Router();

router.delete('/', (req, res) => {
  // console.log('여기는 왔니?')
  
  req.session.destroy((err) => {
    if (err) {
      // console.log(err);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;