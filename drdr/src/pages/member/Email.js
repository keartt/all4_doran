import React from 'react';
import Header from '../fragment/headerBack';
import '../../resource/css/main.css';
import '../../resource/css/member/Email.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material";

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


function Email() {
  return (
    <div className="mainContainer">

        <div className='mainCenter'>
        
        {/* 헤더 부분 */}
        <Header/>

            <div className='divMain'>
          
            {/* 여기서 작업 */}

            <div class="wrapper">
                <div class="speech-bubble">
                    <p>이메일을 잃어버리셨군요...</p>
                </div>

                <img
                    className="login-image image-2"
                    src="Rabbit_2.png"
                    alt="Login"
                    width="20%"
                    height="30%"
                />

                <div class="speech-bubble2">
                    <p>제가 찾아드릴게요...</p>
                </div>
            </div>

            {/* <div style={{ display: "flex", justifyContent: "center" }}>
                
                <img
                    className="login-image image-2"
                    src="Rabbit_2.png"
                    alt="Login"
                    width="20%"
                    height="30%"
                />

                <div class="speech-bubble">
                    <p>내용</p>
                </div>
            </div> */}

                <div>
                    <form>
                    <ThemeProvider theme={theme}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField required id="name" name="name" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="이름" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField required id="phone" name="phone" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                            color: '#FF8000;'}}} label="전화번호" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12}>
                                <TextField required id="company" name="company" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="회사" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12}>
                                <TextField required id="department" name="department" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="부서" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12}>
                                <TextField required id="rank" name="rank" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="직급" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12}>
                                <Button id="btnLogin" variant="contained" fullWidth theme={theme}>이메일 찾기</Button> 
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

export default Email;