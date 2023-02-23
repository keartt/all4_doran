import React, { useEffect } from 'react';
import { useState } from "react"
import Header from '../fragment/headerBack';
import '../../resource/css/main.css';
import '../../resource/css/member/Signup.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material";
import { redirect } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
//import { registerUser } from '../../../_actions/user_action';

const theme = createTheme({

    status: {
        danger: '#FE9A2E',
      },
      palette: {
        primary: {
          main: '#FE9A2E',
          darker: '#FE9A2E',
        },
        neutral: {
          main: '#FE9A2E',
          contrastText: '#FE9A2E',
        }
    },
    typography: {
        fontFamily: "GmarketSansMedium"
      }
})

function Signup() {

  // // react hook에서 state 사용
  const [Email, setEmail] = useState('');
  const [Pw, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Company, setCompany] = useState('');
  const [Department, setDepartment] = useState('');
  const [Rank, setRank] = useState('');


  // handler 함수들
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onPhoneHandler = (event) => {
    setPhone(event.currentTarget.value);
  };

  const onCompanyHandler = (event) => {
    setCompany(event.currentTarget.value);
  };

  const onDepartmentHandler = (event) => {
    setDepartment(event.currentTarget.value);
  };

  const onRankHandler = (event) => {
    setRank(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    // 태그의 기본 기능으로 리프레쉬 되는 것을 방지.
    event.preventDefault();

    function SignupSuccess() {
      alert('회원가입 성공');
      window.location.href = '/login';
    }

    const formData = { email: Email,
      password: Pw,
      name: Name,
      phone: Phone,
      company: Company,
      department: Department,
      rank:Rank };
    console.log(JSON.stringify(formData));

    fetch('/member/add', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }, // json형태의 데이터를 서버로 보냅니다.
      body: JSON.stringify({
        email: Email,
        password: Pw,
        name: Name,
        phone: Phone,
        company: Company,
        department: Department,
        rank:Rank
      })
    })
    .then(response => {
      SignupSuccess();
    })
    .catch(error => {
      // handle error
    });
  };

  return (
    <div className="mainContainer">

        <div className='mainCenter'>
        
        {/* 헤더 부분 */}
        <Header/>
        
            <div className='divMain'>
          
            {/* 여기서 작업 */}

            <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  className="login-image image-1"
                  src="Rabbit_1.png"
                  alt="Login"
                  width="20%"
                  height="30%"
                />
                <img
                  className="login-image image-2"
                  src="Rabbit_2.png"
                  alt="Login"
                  width="20%"
                  height="30%"
                />
                <img
                  className="login-image image-3"
                  src="Rabbit_3.png"
                  alt="Login"
                  width="20%"
                  height="30%"
                />
                <img
                  className="login-image image-4"
                  src="Rabbit_4.png"
                  alt="Login"
                  width="20%"
                  height="30%"
                />
                <img
                  className="login-image image-5"
                  src="Rabbit_5.png"
                  alt="Login"
                  width="20%"
                  height="30%"
                />
              </div>
                
                <div>
                    <form method = "post" onSubmit={onSubmitHandler}>
                    <ThemeProvider theme={theme} >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" name="email" value={Email} onChange={onEmailHandler} fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="이메일" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField type="password" required id="standard-required" name="pw" value={Pw} onChange={onPasswordHandler} fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="비밀번호" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" name="name" value={Name} onChange={onNameHandler} fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="이름" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" name="phone" value={Phone} onChange={onPhoneHandler} fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="전화번호" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" name="company" value={Company} onChange={onCompanyHandler} fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="회사" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" name="department" value={Department} onChange={onDepartmentHandler} fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="부서" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" name="rank" value={Rank} onChange={onRankHandler} fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="직급" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12}>
                                <Button id="btnSignup" type="submit" variant="contained" fullWidth theme={theme}>회원가입</Button>
                            </Grid>
                        </Grid>
                        </ThemeProvider>
                    </form>
                </div>               
            </div>
            
        </div>
    </div>
  );
}

export default Signup;
