const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors');
const Home = require('./router/home');
const Farm = require('./router/farm');
const Carrot = require('./router/Carrot');
const Member = require('./router/member');
const IdPw = require('./router/IdPw');

const session = require('express-session');
const login = require('./router/login');
const logout = require('./router/logout');

app.use(express.urlencoded({ extended: true }))
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const corsOption = {
    origin: "*",
    optionSuccessStatus: 200,
};
app.use(cors(corsOption));
app.listen(80, function () {
  console.log(' 접속성공  5005');
});

app.use(express.static(path.join(__dirname, '/drdr/build')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'drdr/build', 'index.html'));
});

// app.use(express.static(__dirname + '/drdr/build'))
// app.get('/', (req, res) => {
//   res.sendFile('index.html')
// })


app.use(session({secret : '비밀코드', resave : true, saveUninitialized: false  }));  
// name: 'my-cookie'
// 이 코드 아래에 라우터 써야지 세션 쓸 수 있음
// 세션에 저장된 값 = _id, email, pw
// 다른 라우터에서 세션 쓰는법
//const user = req.session.user;  하면 json 형식으로 
//{ _id: '63f5854fee926f1cf30a706b', email: 't@t', pw: 'tt' } 으로 담겨있음

app.use("/list", Home);
app.use("/farm", Farm);
app.use("/carrot", Carrot);
app.use("/member", Member);
app.use('/login', login);
app.use('/logout', logout);
app.use('/idPw', IdPw);