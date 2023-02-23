import React, { useState, useEffect } from 'react';
import Header from '../fragment/headerBack';
import '../../resource/css/main.css';
import '../../resource/css/member/Pw.css';
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


function Pw() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [department, setDepartment] = useState('');
    const [rank, setRank] = useState('');


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };

      const handleNameChange = (event) => {
        setName(event.target.value);
      };

      const handlePhoneChange = (event) => {
        setPhone(event.target.value);
      };

      const handleCompanyChange = (event) => {
        setCompany(event.target.value);
      };

      const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
      };

      const handleRankChange = (event) => {
        setRank(event.target.value);
      };


      const handleSubmit = (event) => {

        if(email.trim() === "" || name.trim() === "" || phone.trim() === "" || company.trim() === "" ||department.trim() === "" ||rank.trim() === ""){
            alert("모든 정보를 입력하세요.");
        }else{


            


            event.preventDefault();


            fetch('/idPw/findPw', {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json",
                }, // json형태의 데이터를 서버로 보냅니다.
                body: JSON.stringify({


                  email: email.trim(),
                  name: name.trim(),
                  phone: phone.trim(),
                  company: company.trim(),
                  department: department.trim(),
                  rank: rank.trim()
                })
      
              })    
              // .then => 받아온 정보를 사용할 필요가 있는 경우에 사용
                .then((res) => res.json())
                .then((json) => {

                    var str = json.email;

                    alert(JSON.stringify(str));

                    if(JSON.stringify(json) != []){
                        alert(JSON.stringify(json));
                    }else{
                        alert("야호");

                    }
                    
                    
                  //var farmId = json.farmId;
                 // window.location.href = "/ViewFarm/"+farmId;
                  // alert("1"+ json.farmId)
                  // handle response from server
                })
                
                .catch(error => {
                  // handle error
                });












        }




      }


  return (
    <div className="mainContainer">


        <div className='mainCenter'>
        
        {/* 헤더 부분 */}
        <Header/>

            <div className='divMain'>
          
            {/* 여기서 작업 */}

            <div class="wrapper">
                <div class="speech-bubble">
                    <p>비밀번호를 잃어버리셨군요...</p>
                </div>

                <img
                    className="login-image image-3"
                    src="Rabbit_3.png"
                    alt="Login"
                    width="20%"
                    height="30%"
                />

                <div class="speech-bubble2">
                    <p>제가 찾아드릴게요...</p>
                </div>
            </div>

                <div>
                    <form>
                    <ThemeProvider theme={theme}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField required id="email"  onChange={handleEmailChange} name="email" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="이메일" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField required id="name" name="name"  onChange={handleNameChange} fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                            color: '#FF8000;'}}} label="이름" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12}>
                            <TextField required id="phone" name="phone" fullWidth  onChange={handlePhoneChange} sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                            color: '#FF8000;'}}} label="전화번호" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12}>
                            <TextField required id="company" name="company"  onChange={handleCompanyChange} fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                            color: '#FF8000;'}}} label="회사" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12}>
                            <TextField required id="department" name="department"  onChange={handleDepartmentChange}  fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                            color: '#FF8000;'}}} label="부서" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12}>
                            <TextField required id="rank" name="rank" fullWidth  onChange={handleRankChange} sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                            color: '#FF8000;'}}} label="직급" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12}>
                                <Button type="button" variant="contained" fullWidth  id="btnLogin" size="small" onClick={handleSubmit}>비밀번호 찾기</Button>
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

export default Pw;
