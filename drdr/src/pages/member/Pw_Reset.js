
import React, { useState } from 'react';
import Header from '../fragment/headerBack';
import '../../resource/css/main.css';
import '../../resource/css/member/Pw_Reset.css';
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


function Pw_Reset() {
    const [password2, setPassword2] = useState("");
    const [password, setPassword] = useState("");

    const onPw2Handler = (event) => {
        setPassword2(event.currentTarget.value)
    }
    
    const onPwHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
    };

    return (
        <div className="mainContainer">

            <div className='mainCenter'>

                {/* 헤더 부분 */}
                <Header />

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
                
              </div>

                    <div>
                        <form onSubmit={handleSubmit}>
                            <ThemeProvider theme={theme}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField required id="standard-required" name="password" value={password} onChange={onPwHandler} fullWidth sx={{
                                            m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                                color: '#FF8000;'
                                            }
                                        }} label="비밀번호" defaultValue="" variant="standard" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField required id="standard-required" name="password2" value={password2} onChange={onPw2Handler}  fullWidth sx={{
                                            m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                                color: '#FF8000;'
                                            }
                                        }} label="비밀번호 확인" defaultValue="" variant="standard" />
                                    </Grid>
                                    <Grid item xs={12}></Grid>
                                    <Grid item xs={12}>
                                        <Stack spacing={1} direction="row">
                                            <Button type="submit" id="btnLogin" variant="contained" fullWidth theme={theme}>비밀번호 변경</Button>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}></Grid>
                                </Grid>
                            </ThemeProvider>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Pw_Reset;