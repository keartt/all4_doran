
import React, { useState } from 'react';
import '../../resource/css/main.css';
import '../../resource/css/member/Login.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material";
import Divider from '@mui/material/Divider';
import { redirect } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { loginUser } from './drdr/src/_action/user_action';
// import { withRouter } from 'react-router-dom';

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


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPwHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    function LoginSuccess() {
        alert('로그인 성공');
        window.location.href = '/home';
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => {
                if (response.status === 200) {
                    LoginSuccess();
                } else if (response.status === 401) {
                    alert('농장 주인 맞슈?')
                    window.location.href = "/login";
                } else {
                    throw new Error("서버 응답 오류");
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="mainContainer">

            <div className='mainCenter'>

                {/* 헤더 부분 */}

                <div className="mainHeader">
                    <a id="header1" href="/home">
                        도란도란
                    </a>
                </div>

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
                        <form onSubmit={handleSubmit}>
                            <ThemeProvider theme={theme}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField required id="standard-required" name="email" value={email} onChange={onEmailHandler} fullWidth sx={{
                                            m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                                color: '#FF8000;'
                                            }
                                        }} label="이메일" defaultValue="" variant="standard" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField required id="standard-required" type="password" name="password" value={password} onChange={onPwHandler} fullWidth sx={{
                                            m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                                color: '#FF8000;'
                                            }
                                        }} label="비밀번호" defaultValue="" variant="standard" />
                                    </Grid>
                                    <Grid item xs={12}></Grid>
                                    <Grid item xs={12}>
                                        <Stack spacing={1} direction="row">
                                            <Button type="submit" id="btnLogin" variant="contained" fullWidth theme={theme}>로그인</Button>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}></Grid>
                                    <Grid item xs={12}>
                                        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                                            <Button href="/Signup" fullWidth theme={theme}>회원가입</Button>
                                            {/* <Button href="/Email" fullWidth theme={theme}>이메일 찾기</Button> */}
                                            {/* <Button href="/Pw" fullWidth theme={theme}>비밀번호 찾기</Button> */}
                                        </Stack>
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
export default Login;