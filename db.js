const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://admin:1234@boilerplate.g6vcczn.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(url, (error, client) => {
  if (error) return console.log('디비 접속 에러')
  console.log("몽고 연결 쌉가능");

  const dbCon = client.db('node_test');
  module.exports.db = dbCon;

})

