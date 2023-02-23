import React from 'react';
import '../../resource/css/main.css';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function Header() {
  function handleLogout() {
    fetch('/logout', { method: 'DELETE' })
      .then(response => {
        if (response.status === 200) {
          alert('다음에 또 봐용')
          window.location.href = '/login';
        }
      })
      .catch(error => console.error(error));
  }



  return (
    <div className="mainHeader">
      <a id="header1" href="/home">
        도란도란
      </a>



      <IconButton style={{ backgroundColor: '#F78181', width: '24px', height: '24px' }} onClick={handleLogout} >
        <CloseIcon style={{ color: 'white', width: '20px', height: '20px' }} />
      </IconButton>


      
    </div>
  );
}

export default Header;
