import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import React, { useState, useEffect } from 'react';
import '../../resource/css/main.css';
import '../../resource/css/tree/AddFarm.css';
import Header from '../fragment/header';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useParams } from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import List from "@mui/material/List";

import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';

import { createTheme, ThemeProvider } from "@mui/material";

// var title;
// var daedLine;
// var receiver;
// var subTitle;
// var recieverCheck = false;

// var [title, setTitle] = useState('');
// var [daedLine, setDaedLine] = useState('');
// var [receiver, setReceiver] = useState('');
// var [subTitle, setSubTitle] = useState('');
// var [recieverCheck, setRecieverCheck] = useState(false);

const theme = createTheme({
  typography: {
    fontFamily: "GmarketSansMedium"
  }
})



function AddFarm() {

 
  const params = useParams();
  var codCheck = true;
  
  if(params.CorD === "company"){
    codCheck = true;
  }else{
    codCheck = false;
  }

  const [arr, setArr] = React.useState([]);

  const [title, setTitle] = useState('');
  // const [daedLine, setDaedLine] = useState('');
  const [value, setValue] = React.useState(new Date());

  const [receiver, setReceiver] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [recieverCheck, setRecieverCheck] = useState(false);


  // 사용자 목록

  var arrName = [];
  var arrEmail = [];
  var arrDepartment = [];

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // const handleDeadLineChange = (event) => {
  //   setDaedLine(event.target.value);
  // };

  // 수신인
  const handleRecieverChange = (event) => {
    setReceiver(event.target.value);
    setRecieverCheck(false);
  };

  const handleSubTitleChange = (event) => {
    setSubTitle(event.target.value);
  };




  //  insert 작업
  const handleSubmit = (event) => {

    // alert(title + " : " + receiver + " " + subTitle);

    if (title.trim() === "" || receiver.trim() === "" || subTitle.trim() === "") {
      alert("모든 정보를 입력하세요.");
    } else {
      if (recieverCheck === false) {
        alert("농장 주인을 선택해주세요.");
      } else {


        event.preventDefault();


        fetch('/farm/insert', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          }, // json형태의 데이터를 서버로 보냅니다.
          body: JSON.stringify({
            title: title.trim(),
            subTitle: subTitle.trim(),
            daedLine: value,
            receiver: receiver.trim(),
            receiverName: receiverName,
            CorD: codCheck,
            counter: 0
          })

        })    // .then => 받아온 정보를 사용할 필요가 있는 경우에 사용
          .then((res) => res.json()) //추가된 부분
          .then((json) => {
            var farmId = json.farmId;
            window.location.href = "/ViewFarm/"+farmId;
            // alert("1"+ json.farmId)
            // handle response from server
          })
          
          .catch(error => {
            // handle error
          });

        // window.location.href = "/ViewCarrot";

        // var carrotFrm = document.getElementById('carrotFrm');
        // carrotFrm.submit();

      }
    }
  }

  const clicks = function (index) {

    var name = document.getElementsByName('reciever');
    name[0].defaultValue = " ";
    name[0].value = arrEmail[index];

    setRecieverCheck(true);
    setReceiver(arrEmail[index]);
    setReceiverName(arrName[index]);

  }

  // 사람 List
  const renderRow = function (porps) {

    const { index, style } = porps;
    return (

      <ListItem style={style} key={arrName[index]} value={arrName[index]} component="div" disablePadding onClick={() => clicks(index)}>
        <ListItemButton>
          <Avatar sx={{ marginRight: 2 }}>
            <PersonIcon />
          </Avatar>

          <ListItemText primary={`${arrName[index]} ( ${arrEmail[index]} )`} secondary={`${arrDepartment[index]}`} />
        </ListItemButton></ListItem>

    );

  }

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch('/farm/selectUser', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        }
      })
      const json = await response.json();
      setArr(json);

    };
    fetchData();
  }, []);


  const nameList = arr.map((arr, i) =>
    arrName.push(arr.name)
  )
  const emailList = arr.map((arr, i) =>
    arrEmail.push(arr.email)
  )
  const departmentList = arr.map((arr, i) =>
    arrDepartment.push(arr.department)
  )


  return (

    <ThemeProvider theme={theme}>
      <div className="mainContainer">



        <div className='mainCenter'>

          <Header />


          <form id='carrotFrm' method='post'>
            <div className='treeMain'>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField required id="standard-required" name="title" fullWidth sx={{
                    m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FE9A2E' }, "& label.Mui-focused": {
                      color: '#FE9A2E;'
                    }

                  }} label="제목" defaultValue=" " onChange={handleTitleChange} variant="standard" />

                </Grid>


                <Grid item xs={12}>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="마감일"
                      value={value}
                      id="deadLine"
                      inputFormat="YYYY-MM-DD"
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}

                      renderInput={(params) => <TextField required name="deadLine" id="standard-required" variant="standard" fullWidth sx={{

                        m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FE9A2E' }, "& label.Mui-focused": {
                          color: '#FE9A2E;'
                        }
                      }} {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>


                <Grid item xs={12}>
                  <TextField required id="standard-required" name="reciever" fullWidth sx={{
                    m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FE9A2E' }, "& label.Mui-focused": {
                      color: '#FE9A2E;'
                    }
                  }} label="수신인" onChange={handleRecieverChange} defaultValue=" " variant="standard" />

                </Grid>

                {/* <Grid item xs={1}>

                  <IconButton variant="contained" id="btnSearch" size="small">
                  {<IconButton variant="contained" id="btnSearch" size="small" onClick={useSearch}> }

                    <SearchIcon />
                  </IconButton>
                </Grid> */}


                <Grid item xs={12}>

                  <FixedSizeList
                    height={150}
                    itemSize={60}
                    itemCount={arrName.length}
                    overscanCount={5}
                  >
                    {renderRow}
                  </FixedSizeList>


                </Grid>


                <Grid item xs={12}>

                  <TextField id="standard-required" name="subTitle" label="상세정보" fullWidth sx={{
                    m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                      color: '#FF8000;'
                    }

                  }} multiline rows={5} onChange={handleSubTitleChange} variant="standard" />

                </Grid>

                <Grid item xs={12}></Grid>
                <Grid item xs={12}>
                  {/* <Button variant="contained" id="btnCreate" size="small" onClick={() => clickAddFarm()}> */}
                  <Button type="button" variant="contained" id="btnCreate" size="small" onClick={handleSubmit} >
                    농장 만들기
                  </Button>
                </Grid>


              </Grid>


            </div>

          </form>
        </div>

      </div>

    </ThemeProvider>
  );
}

export default AddFarm;
