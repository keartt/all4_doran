import React from 'react';
import Header from '../fragment/headerExit';
import '../../resource/css/main.css';
import { useState } from "react"
// 아이콘
import ApartmentIcon from '@mui/icons-material/Apartment';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';

import '../../resource/css/home.css';

import Department from './home.department';
import Company from './home.company';
import My from './home.my';

function Home() {
  const [activeTab, setActiveTab] = useState('company');

  const handleClick = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className="homeContainer">
      <div className='homeCenter'>
        
        
        
        
        
        <Header />
        <div className='divMain'>
          <IconButton 
            className={`iconBtn ${activeTab === 'company' ? 'active' : ''}`}
            onClick={() => handleClick('company')}
          >
            <ApartmentIcon />
          </IconButton>
          <IconButton 
            className={`iconBtn ${activeTab === 'department' ? 'active' : ''}`}
            onClick={() => handleClick('department')}
          >
            <GroupsIcon />
          </IconButton>
          <IconButton 
            className={`iconBtn ${activeTab === 'my' ? 'active' : ''}`}
            onClick={() => handleClick('my')}
          >
            <PersonIcon />
          </IconButton>
          {activeTab === 'company' && <Company />}
          {activeTab === 'department' && <Department />}
          {activeTab === 'my' && <My />}
        </div>
      </div>
    </div>
  );
}


export default Home;