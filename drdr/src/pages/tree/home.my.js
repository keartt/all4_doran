import React, { useEffect } from 'react';
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";

import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: "GmarketSansMedium"
  }
})

function My() {

  const [farm, setFarm] = useState([])
    // 세션에 저장된 아이디
    const userId = '강성현'

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/list/my', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          }
      })
      
      const json = await response.json();
      // console.log(json)

      setFarm(json);
    };
    fetchData();
  }, [ ]);
  // res 가져올 값
  // title subTitle receiver count 

  const farmList = farm.map((farm, i) =>
  <Link to={"/ViewFarm/" + farm._id}>
    <List sx={{ width: "90%", bgcolor: "background.paper" }} key={i}>
      <ListItem alignItems="flex-start" style={{marginLeft:'5%'}} >
        <ListItemText
           primary={`${farm.title}`}

          secondary={<React.Fragment>  {farm.subTitle}  </React.Fragment>} /><span style={{color:'#FE9A2E'}}> 🥕 {farm.counter}개 </span> 
      </ListItem>
    </List>
    </Link>
  )
  return <>

 <h3 className='titleName' style={{marginLeft:'8%'}}> <h1 style={{display:'inline'}}>🧑‍🌾</h1>  {farm.userName}내 농장!! </h3> 

    {/* 내가 심은 밭? 당근 개수? 마이페이지 수정?  */}
    <ThemeProvider theme={theme}>
      {farmList}
    </ThemeProvider>
  </>
}


export default My;