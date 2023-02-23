import Grid from '@mui/material/Grid';
import React from 'react';
import '../../resource/css/main.css';
import '../../resource/css/tree/AddCarrot.css';
import Header from '../fragment/headerCarrot';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, IconButton, ThemeProvider } from '@mui/material';


import r1 from '../../resource/img/r1.png';
import r2 from '../../resource/img/r2.png';
import r3 from '../../resource/img/r3.png';
import r4 from '../../resource/img/r4.png';
import r5 from '../../resource/img/r5.png';


import { useEffect } from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom';

import TextField from '@mui/material/TextField';

import styled from "@emotion/styled";
const Image = styled.img`
  width: 100%;
  margin:0 auto;
`;
const theme = createTheme({
  typography: {
    fontFamily: 'GmarketSansMedium'
  }
})


function ViewCarrot() {

  const [carrot, setCarrot] = useState([])
  const params = useParams();


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/carrot/selectCarrot', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        }, // json형태의 데이터를 서버로 보냅니다.
        body: JSON.stringify({
          carrotId: params.carrotId
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
    r5: <Image src={r5} />
  }


  const carrotInfo = carrot.map((carrot, i) =>


    <>

      <Grid item xs={4.8}></Grid>
      <Grid item xs={3.2}> {UI[carrot.imageSrc]} </Grid>
      <Grid item xs={4}></Grid>

      <Grid item xs={12}>


        <TextField id="outlined-multiline-static" label={carrot.isAnonymous === true ? "| 익명의 토끼" : "| " + carrot.userName} fullWidth sx={{
          m: 1, '& .MuiOutlinedInput-root.Mui-disabled': {
            '& fieldset': {
              borderColor: '#FF8000',
            }, '& input.Mui-disabled': {
              color: 'black'
            }
          }, "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "#000000",
          },
          label: {
            '&.Mui-disabled': {
              color: '#FF8000'
            }
          }
        }} multiline rows={8} defaultValue={carrot.message} disabled />



      </Grid>




    </>
  )








  return (
    <ThemeProvider theme={theme}>
      <div className="mainContainer">

        <div className='mainCenter'>

          {/* 헤더 부분 */}
          {<Header/>}

          <div className='carrotMain'>



            <Grid container spacing={2}>

              {carrotInfo}


            </Grid>








          </div>

        </div>

      </div>
    </ThemeProvider>
  );
}

export default ViewCarrot;
