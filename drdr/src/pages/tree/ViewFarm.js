import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import React, { useEffect } from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom';

import '../../resource/css/main.css';
import '../../resource/css/tree/AddFarm.css';
import Header from '../fragment/headerExit';
import Stack from '@mui/material/Stack';

import r1 from '../../resource/img/r1.png';
import r2 from '../../resource/img/r2.png';
import r3 from '../../resource/img/r3.png';
import r4 from '../../resource/img/r4.png';
import r5 from '../../resource/img/r5.png';


import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';

import { Link } from 'react-router-dom';

import { createTheme, ThemeProvider } from "@mui/material";

import styled from "@emotion/styled";
const Image = styled.img`
  width: 100%;
  margin:0 auto;
`;


const theme = createTheme({
  typography: {
    fontFamily: "GmarketSansMedium"
  }
})


function ViewFarm() {

  const [farm, setFarm] = useState([])
  const [carrot, setCarrot] = useState([])

  const params = useParams();
  // alert(params.farmId);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/farm/select', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        }, // json형태의 데이터를 서버로 보냅니다.
        body: JSON.stringify({
          farmId: params.farmId
        })
      })
      
      const json = await response.json();
      // alert(JSON.stringify(json));

      setFarm(json);

    };
    fetchData();
  }, []);

  const farmInfo = farm.map((farm, i) =>


  <>
              <Grid item xs={1} key={i}>
                <MailOutlineIcon />
              </Grid>
              <Grid item xs={11}>
                <span id="title">{farm.title}</span>
              </Grid>

              <Grid item xs={1}>
                <SentimentSatisfiedAltIcon />
              </Grid>
              <Grid item xs={11}>
                <span id="recipient">{farm.receiverName} ( {farm.receiver} )</span>
              </Grid>

              <Grid item xs={1}>
                <ChatBubbleOutlineIcon />
              </Grid>
              <Grid item xs={11}>
                <span id="recipient">{farm.subTitle}</span>
              </Grid>

              <Grid item xs={1}>
                <DateRangeIcon />
              </Grid>
              <Grid item xs={11}>
                <span id="recipient">{farm.date.substring(0,10 )}</span>
              </Grid>

  
  </>
    
)



useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('/carrot/select', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }, // json형태의 데이터를 서버로 보냅니다.
      body: JSON.stringify({
        farmId: params.farmId
      })
    })
    
    const json = await response.json();
    // alert(JSON.stringify(json));

    setCarrot(json);

  };
  fetchData();
}, []);

var UI = {
  r1: <Image src={r1} />,
  r2: <Image src={r2} />,
  r3: <Image src={r3} />,
  r4: <Image src={r4} />,
  r5:  <Image src={r5} />
}

const carrotInfo = carrot.map((carrot, i) =>

  <>
              <Grid item xs={4}>
                <Stack justifyContent="center" alignItems="center" spacing={2}>
                  {UI[carrot.imageSrc]}
                  <Link to={"/ViewCarrot/" + carrot._id}> <span>{carrot.isAnonymous === true ?"익명의 토끼":carrot.userName}</span></Link>
                </Stack>
              </Grid>
  
  </>
)
  return (

    
    <ThemeProvider theme={theme}>
      <div className="mainContainer">



        <div className='mainCenter'>

          <Header />

          <div className='carrotMain'>

            <Grid container spacing={2}>

              <Grid item xs={12}>
                <Link to={"/AddCarrot/"+ params.farmId}>
                  <IconButton style={{ backgroundColor: '#FF8000', borderRadius: '5px', color: "#FFFFFF", fontFamily: "GmarketSansMedium", fontSize: '15px' }}><ModeEditIcon style={{ color: "#FFFFFF" }} /><span>　작성</span></IconButton>
                </Link>
              </Grid>

              <Grid item xs={12}></Grid>

              {farmInfo}

              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>


            </Grid>
            <Grid container spacing={9}>

              {carrotInfo}
              
            </Grid>
          </div>
        </div>

      </div>

    </ThemeProvider>
  );
}

export default ViewFarm;
